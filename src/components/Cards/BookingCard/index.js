import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Avatar } from 'components/Avatar';
import { getBookingTime } from 'utils/datetime';
import { getImageUrl } from 'utils';
import { icons } from 'assets';
import styles from './styles';

const currency = 'RON';

const BookingCard = ({ booking, onPress }) => (
  <Pressable onPress={onPress} style={styles.base}>
    <View style={styles.leftSection}>
      <Avatar
        priority={FastImage.priority.high}
        src={getImageUrl(booking.business.owner.profile_image, 50, 50)}
        size={50}
      />
      <View style={styles.textWrapper}>
        <Text
          style={styles.ownerName}
        >{`${booking.business.owner.first_name} ${booking.business.owner.last_name}`}</Text>
        <Text style={styles.date}>{`${getBookingTime(
          booking.start_date,
        )}`}</Text>
        <Text style={styles.priceText}>
          {booking.price} {currency}
        </Text>
      </View>
    </View>
    <View style={styles.rightArrow}>
      <Image source={icons.arrow.right} />
    </View>
  </Pressable>
);

export default BookingCard;
