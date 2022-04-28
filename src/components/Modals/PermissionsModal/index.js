import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import Icon from 'components/Icon';
import { icons } from 'assets';
import { translate } from 'utils';

const PermissionsModal = ({ isVisible, onButtonPress }) => (
  <View>
    <Modal isVisible={isVisible}>
      <View style={styles.wrapper}>
        <Icon source={icons.location.gradient} style={styles.icon} />
        <Text style={styles.title}>
          {translate('allow', true)} <Text style={styles.name}>Salon365</Text>{' '}
          {translate('to_use_your_location')}
        </Text>
        <Text style={styles.description}>
          {translate('messages.we_use_your_location_reason')}
        </Text>
        <PrimaryButton
          onPress={onButtonPress}
          text={translate('buttons.allow_location_usage')}
          style={styles.button}
        />
      </View>
    </Modal>
  </View>
);

export default PermissionsModal;
