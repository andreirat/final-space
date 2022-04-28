import React from 'react';
import { Text, View, Image } from 'react-native';

import PrimaryButton from 'components/Buttons/PrimaryButton';
import { illustrations } from 'assets';
import { translate } from 'utils';
import styles from './styles';

const MyBookingsRestricted = ({ navigation }) => (
  <View style={styles.emptyStateContainer}>
    <View style={styles.headerWrapper}>
      <Text style={styles.title}>
        {translate('titles.your_bookings_list').toUpperCase()}
      </Text>
      <Text style={styles.emptyText}>
        {translate('empty_states.my_bookings.not_auth')}
      </Text>
    </View>
    <View style={styles.illustrationWrapper}>
      <Image
        resizeMethod={'auto'}
        resizeMode={'contain'}
        style={styles.emptyStateIllustration}
        source={illustrations.notFound}
      />
    </View>

    <View style={styles.loginButtonWrapper}>
      <PrimaryButton
        onPress={() => navigation.navigate('Home')}
        text={translate(
          'buttons.search_for_nearby_professionals',
        ).toUpperCase()}
      />
    </View>
  </View>
);

export default MyBookingsRestricted;
