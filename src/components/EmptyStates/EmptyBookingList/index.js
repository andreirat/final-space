import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'utils';

import styles from './styles';
import GradientButton from 'components/Buttons/GradientButton';

const EmptyBookingList = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>
      {translate('empty_states.my_bookings.no_upcoming_bookings')}
    </Text>
    <GradientButton
      onPress={() => navigation.navigate('Home')}
      text={translate('buttons.search_for_nearby_professionals').toUpperCase()}
    />
  </View>
);

export default EmptyBookingList;
