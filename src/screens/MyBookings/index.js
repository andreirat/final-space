import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  Platform,
  StatusBar,
  Linking,
} from 'react-native';
import shallow from 'zustand/shallow';
import LinearGradient from 'react-native-linear-gradient';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import DynamicTabBar from 'components/DynamiTabBar';
import LoadingIndicator from 'components/LoadingIndicator';
import NextBookingCard from 'components/Cards/NextBookingCard';
import MyBookingsRestricted from 'components/EmptyStates/MyBookingsRestricted';
import Icon from 'components/Icon';
import BookingsList from 'components/Lists/DefaultList';

import { myBookingsStore } from 'stores/MyBookingsStore';
import { useUserStore } from 'stores/UserStore';

import { translate } from 'utils';
import { useAuth } from 'providers/AuthProvider';
import { icons } from 'assets';
import styles from './styles';
import colors from 'styles/colors';
import { useOverlay } from 'providers/OverlayProvider';
import { isDateToday } from 'utils/datetime';
import GradientButton from 'components/Buttons/GradientButton';
import OpenSettingsModal from 'components/Modals/OpenSettingsModal';
import FocusAwareStatusBar from 'components/FocusAwareStatusBar';

const HEADER_EXPANDED_HEIGHT = 240;
const HEADER_COLLAPSED_HEIGHT = 120;

export const MyBookings = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpenSettingsModalVisible, setIsOpenSettingsModalVisible] =
    useState(false);
  const [user] = useUserStore(state => [state.user], shallow);

  const { authData } = useAuth();
  const overlay = useOverlay();
  const [scrollY] = useState(new Animated.Value(0));
  const [
    pastBookings,
    futureBookings,
    canceledBookings,
    fetch,
    refresh,
    fetching,
    loading,
  ] = myBookingsStore(
    state => [
      state.pastBookings,
      state.futureBookings,
      state.canceledBookings,
      state.fetch,
      state.refresh,
      state.fetching,
      state.loading,
    ],
    shallow,
  );

  useEffect(() => {
    if (authData) {
      fetch();
    }
  }, [fetch, authData]);

  useEffect(() => {
    if (loading) {
      overlay.show('loading');
    } else {
      overlay.hide();
    }
  }, [loading, overlay]);

  const tabs = [
    {
      id: 1,
      name: translate('buttons.upcoming', true),
    },
    {
      id: 2,
      name: translate('buttons.finished', true),
    },
    {
      id: 3,
      name: translate('buttons.canceled', true),
    },
  ];

  const headerHeight = useMemo(() => {
    return scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }, [scrollY]);

  const collapsedHeaderTitleOpacity = useMemo(() => {
    return scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }, [scrollY]);

  const expandedHeaderTitleOpacity = useMemo(() => {
    return scrollY.interpolate({
      inputRange: [0, (HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT) / 2],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }, [scrollY]);

  const expandedHeaderHeight = useMemo(() => {
    return scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT],
      outputRange: [HEADER_COLLAPSED_HEIGHT, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }, [scrollY]);

  const renderBookings = () => {
    switch (selectedIndex) {
      case 0:
        return futureBookings;
      case 1:
        return pastBookings;
      case 2:
        return canceledBookings;

      default:
        return futureBookings;
    }
  };

  const handleBookingPress = booking => {};

  //TODO: handle ANDROID permissions here
  const hasLocationPermission = () => {
    return check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(result => {
        switch (result) {
          case RESULTS.DENIED:
            return request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(access => {
              return access === RESULTS.GRANTED;
            });
          case RESULTS.GRANTED:
            return true;
          case RESULTS.BLOCKED:
            return false;
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  //TODO: handle ANDROID permissions here
  const handleNavigateButtonPress = async booking => {
    const hasPermission = await hasLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const scheme = Platform.select({
            ios: 'maps://',
            android: 'geo:0,0?q=',
          });

          const latLng = `${position.coords.latitude},${booking.business.longitude}`;
          const label = 'Custom Label';
          const url = Platform.select({
            ios: `${scheme}app?saddr=${position.coords.latitude}+${
              position.coords.longitude
            }&daddr=${parseFloat(booking.business.latitude)}+${parseFloat(
              booking.business.longitude,
            )}`,
            android: `${scheme}${latLng}(${label})`,
          });

          Linking.openURL(url);
        },
        error => {
          // See error code charts below.
          console.error(error.code);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } else {
      setIsOpenSettingsModalVisible(true);
    }
  };

  //TODO: handle ANDROID open settings action
  const handleOpenSettingsButtonPress = () => {
    Linking.openSettings();
    setIsOpenSettingsModalVisible(false);
  };

  if (!authData) {
    return <MyBookingsRestricted navigation={navigation} />;
  }

  return (
    <View style={styles.base}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#FFF" />
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <LinearGradient
          colors={colors.secondaryGradient}
          style={styles.topGradient}
        >
          <Animated.View
            style={[
              styles.expandedHeaderWrapper,
              {
                height: expandedHeaderHeight,
                opacity: expandedHeaderTitleOpacity,
              },
            ]}
          >
            <>
              {futureBookings.length > 0 &&
              isDateToday(futureBookings[0].start_date) ? (
                <NextBookingCard
                  onNavigateButtonPress={() =>
                    handleNavigateButtonPress(futureBookings[0])
                  }
                  booking={futureBookings[0]}
                  onRightIconPress={() => {}}
                />
              ) : (
                <>
                  <Text style={styles.headerTodayTitle}>
                    {translate('titles.hello', true)}, {user.first_name}
                  </Text>
                  <Text style={styles.headerSubtitle}>
                    {translate('empty_states.my_bookings.no_bookings_today')} 😟
                  </Text>
                  {futureBookings.length > 0 && (
                    <>
                      <GradientButton
                        reversed={true}
                        onPress={() => navigation.navigate('Home')}
                        text={translate(
                          'buttons.search_for_nearby_professionals',
                        ).toUpperCase()}
                      />
                    </>
                  )}
                </>
              )}
            </>
          </Animated.View>

          <Animated.View
            style={[
              styles.headerTitleScrolled,
              {
                opacity: collapsedHeaderTitleOpacity,
              },
            ]}
          >
            <Animated.Text style={styles.scrolledTextHeader}>
              {tabs[selectedIndex].name}
            </Animated.Text>
          </Animated.View>
        </LinearGradient>
      </Animated.View>

      <View style={styles.content}>
        <BookingsList
          data={renderBookings()}
          refreshing={fetching}
          onRefresh={() => refresh()}
          onItemPress={() => {}}
          navigation={navigation}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          headerComponent={
            <View style={styles.listHeaderWrapper}>
              <DynamicTabBar
                opacity={expandedHeaderTitleOpacity}
                tabs={tabs}
                activeIndex={selectedIndex}
                onTabChange={index => setSelectedIndex(index)}
              />
              <View>
                <Pressable onPress={() => {}}>
                  <Icon style={styles.filterIcon} source={icons.filter.gray} />
                </Pressable>
              </View>
            </View>
          }
        />
      </View>
      <OpenSettingsModal
        isVisible={isOpenSettingsModalVisible}
        onButtonPress={handleOpenSettingsButtonPress}
      />
    </View>
  );
};
