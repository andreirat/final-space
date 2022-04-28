import React from 'react';
import { View, Text, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';

import { icons } from 'assets';
import styles from './styles';
import GradientButton from 'components/Buttons/GradientButton';
import { getBookingTime } from 'utils/datetime';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { translate } from 'utils';
import { Avatar } from 'components/Avatar';

const NextBookingCard = ({ booking, onNavigateButtonPress }) => (
  <View style={styles.base}>
    <Pressable style={styles.leftSection} onPress={() => {}}>
      <Avatar
        priority={FastImage.priority.high}
        size={40}
        src={booking.business.owner.profile_image}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {`${booking.business.owner.first_name} ${booking.business.owner.last_name}`}
          <Text> {translate('is_waiting_for_you')}</Text>
        </Text>

        <Text style={styles.subtitle}>
          {getBookingTime(booking.start_date)}
        </Text>
      </View>
    </Pressable>

    <View style={styles.buttonsWrapper}>
      <GradientButton
        onPress={onNavigateButtonPress}
        icon={icons.navigate.whiteFull}
        text={translate('buttons.navigate').toUpperCase()}
      />
      <GradientButton
        onPress={() => Linking.openURL(`tel:${booking.business.owner.phone}`)}
        icon={icons.navigate.whiteFull}
        text={translate('buttons.contact').toUpperCase()}
        baseStyle={styles.contact}
      />
    </View>
  </View>
);

export default NextBookingCard;
