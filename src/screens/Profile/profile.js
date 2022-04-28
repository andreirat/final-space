import React, { useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import shallow from 'zustand/shallow';
import DeviceInfo from 'react-native-device-info';

import { Avatar } from 'components/Avatar';
import LoadingIndicator from 'components/LoadingIndicator';
import InfoCard from 'components/Cards/InfoCard';
import MenuSection from 'components/Cards/MenuSection';
import MenuSectionItem from 'components/Cards/MenuSectionItem';
import { useAuth } from 'providers/AuthProvider';
import { fullName, getImageUrl, isISP, translate } from 'utils';

import Barber from 'assets/icons/svg/Barber.svg';
import Help from 'assets/icons/svg/Help.svg';
import { useUserStore } from 'stores/UserStore';
import { SCREEN_WIDTH, METRICS } from 'styles/metrics';
import { icons } from 'assets';
import styles from './styles';
import FocusAwareStatusBar from 'components/FocusAwareStatusBar';

export const Profile = ({ navigation }) => {
  const [user, fetch, loading] = useUserStore(
    useCallback(state => [state.user, state.fetch, state.loading], []),
    shallow,
  );

  const tabBarHeight = useBottomTabBarHeight();
  const { authData } = useAuth();
  const auth = useAuth();

  useEffect(() => {
    async function fetchData() {
      fetch();
    }

    if (authData) {
      fetchData();
    }
  }, [fetch, authData]);

  if (loading) {
    return <LoadingIndicator />;
  }

  const handleRightIconPress = () => {
    // console.log('right icon press');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.base}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView
        contentContainerStyle={[
          styles.scrollView,
          {
            paddingBottom: tabBarHeight + METRICS.padding.screen.bottom,
          },
        ]}
      >
        {authData && (
          <View style={styles.topWrapper}>
            <Avatar
              name={fullName(user)}
              fontSize={16}
              src={getImageUrl(user.profile_image, 144, 144)}
              size={SCREEN_WIDTH / 5}
              style={styles.avatar}
            />
            <Text style={styles.name}>{user.first_name}</Text>
          </View>
        )}

        <View style={styles.infoCardWrapper}>
          {authData && !isISP(user) && (
            <InfoCard
              leftIcon={<Barber width={40} height={40} />}
              title={translate('titles.sign_up_as_professional')}
              subtitle={translate('subtitles.manage_your_business')}
              onPress={handleRightIconPress}
            />
          )}
          {!authData && (
            <InfoCard
              leftIcon={<Help width={40} height={40} />}
              title={translate('titles.sign_up_on_salon')}
              subtitle={translate('subtitles.be_part_of_this_community')}
              onPress={handleSignUpPress}
            />
          )}
        </View>
        <View style={styles.menuListWrapper}>
          <MenuSection title={translate('account', true)}>
            {authData && (
              <MenuSectionItem
                title={translate('personal_settings', true)}
                leftIcon={icons.profile.gradient}
                showArrow={true}
                onPress={() => navigation.navigate('EditProfile')}
              />
            )}
            <MenuSectionItem
              title={translate('notifications', true)}
              leftIcon={icons.notification}
              showArrow={true}
            />
          </MenuSection>

          {authData && isISP(user) && (
            <MenuSection title={translate('business', true)}>
              <MenuSectionItem
                title={translate('settings', true)}
                leftIcon={icons.work}
                showArrow={true}
              />
              <MenuSectionItem
                title={translate('services', true)}
                leftIcon={icons.paper}
                showArrow={true}
              />
              <MenuSectionItem
                title={translate('profession', true)}
                leftIcon={icons.profession}
                showArrow={true}
              />
              <MenuSectionItem
                title={translate('availability', true)}
                leftIcon={icons.time}
                showArrow={true}
              />
              <MenuSectionItem
                title={translate('facilities', true)}
                leftIcon={icons.category}
                showArrow={true}
              />
            </MenuSection>
          )}

          <MenuSection title={translate('other', true)}>
            <MenuSectionItem
              title={translate('contact_us', true)}
              leftIcon={icons.message.mailGradient}
              showArrow={true}
              onPress={() => navigation.navigate('ContactUs')}
            />
            <MenuSectionItem
              title={translate('privacy_policy', true)}
              leftIcon={icons.privacy}
              showArrow={true}
              onPress={() => navigation.navigate('PrivacyPolicy')}
            />
            {isISP(user) && (
              <MenuSectionItem
                title={translate('faq', true)}
                leftIcon={icons.info}
                showArrow={true}
                onPress={() => navigation.navigate('FAQ')}
              />
            )}
          </MenuSection>
        </View>
        {authData && (
          <View style={styles.signOutWrapper}>
            <Pressable onPress={auth.signOut}>
              <Text style={styles.signOutText}>
                {translate('sign_out', true)}
              </Text>
            </Pressable>
            <Text style={styles.version}>
              {translate('version', true)} {DeviceInfo.getVersion()}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
