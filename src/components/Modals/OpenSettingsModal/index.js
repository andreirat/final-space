import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import Icon from 'components/Icon';
import { icons } from 'assets';
import { translate } from 'utils';

const OpenSettingsModal = ({ isVisible, onButtonPress }) => (
  <View>
    <Modal isVisible={isVisible}>
      <View style={styles.wrapper}>
        <View style={styles.alignCenter}>
          <Icon source={icons.location.gradient} style={styles.icon} />
          <Text style={styles.title}>
            {translate('allow', true)} <Text style={styles.name}>Salon365</Text>{' '}
            {translate('to_use_your_location')}
          </Text>
        </View>
        <Text style={styles.description}>
          {`${translate('messages.we_use_your_location_reason')} ${translate(
            'messages.in_settings_follow_steps',
          )}`}
        </Text>
        <View>
          <View style={styles.optionWrapper}>
            <Icon
              source={icons.location.permissions}
              style={styles.optionIcon}
            />
            <Text style={styles.description}>
              Select <Text style={styles.name}>Location</Text>
            </Text>
          </View>
          <View style={styles.optionWrapper}>
            <View style={styles.checkmarkIconWrapper}>
              <Icon
                source={icons.checkmark.blue}
                style={styles.checkmarkIcon}
              />
            </View>
            <Text style={styles.description}>
              Tap on <Text style={styles.name}>While Using</Text>
            </Text>
          </View>
        </View>
        <View style={styles.alignCenter}>
          <PrimaryButton
            onPress={onButtonPress}
            text={translate('buttons.go_to_settings').toUpperCase()}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  </View>
);

export default OpenSettingsModal;
