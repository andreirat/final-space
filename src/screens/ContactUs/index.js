import React, { useState } from 'react';
import { View, Text } from 'react-native';
import shallow from 'zustand/shallow';

import DefaultInput from 'components/Inputs/DefaultInput';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import { translate, inputHasError } from 'utils';
import Validator from 'services/Validator';
import { useUserStore } from 'stores/UserStore';
import { contactUsStore } from 'stores/contacUsStore';
import { showErrorToast } from 'utils/toast';
import { useAuth } from 'providers/AuthProvider';
import { icons } from 'assets';
import UserService from 'services/User';
import { useOverlay } from 'providers/OverlayProvider';
import styles from './styles';

export const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [user] = useUserStore(state => [state.user], shallow);
  const [submitted, sendContactUs] = contactUsStore(
    state => [state.submitted, state.sendContactUs],
    shallow,
  );

  const [errors, setErrors] = useState({
    message: '',
    fields: [],
  });

  const { authData } = useAuth();
  const overlay = useOverlay();
  const handleFormSubmit = () => {
    if (!authData) {
      const nameValidation = Validator.validateName(name);
      if (!nameValidation.isValid) {
        showErrorToast(nameValidation.message);
        return setErrors({
          message: nameValidation.message,
          fields: ['name'],
        });
      }

      const emailValidation = UserService.validateEmail(email);
      if (!emailValidation.isValid) {
        showErrorToast(emailValidation.message);
        return setErrors({
          message: emailValidation.message,
          fields: ['email'],
        });
      }
    }

    const textValidation = Validator.validateContactText(message);
    if (!textValidation.isValid) {
      showErrorToast(textValidation.message);
      return setErrors({
        message: textValidation.message,
        fields: ['message'],
      });
    }

    const payload = {
      name: authData ? `${user.first_name} ${user.last_name}` : name,
      email: authData ? user.email : email,
      message,
    };

    sendContactUs(payload).then(_ => overlay.toggle());
  };

  return (
    <View style={styles.base}>
      {submitted && (
        <View style={styles.submittedTextWrapper}>
          <Text style={[styles.title, styles.margin10Bottom]}>
            {translate('messages.thank_you')}
          </Text>
          <Text style={styles.subtitle}>
            {translate('messages.we_ll_get_back_to_you_as_soon_as_possible')}
          </Text>
        </View>
      )}

      {!submitted && (
        <>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>
              {translate('hello', true)} {user.first_name},
            </Text>
            <Text style={styles.subtitle}>
              {translate('how_can_we_help')} 😃
            </Text>
          </View>
          {!authData && (
            <DefaultInput
              baseStyle={styles.margin10Bottom}
              error={errors.message}
              leftIcon={icons.profile.darkGray}
              hasError={inputHasError(errors.fields, 'name')}
              placeholder={translate('name', true)}
              value={name}
              autoCorrect={false}
              onChangeText={val => setName(val)}
            />
          )}
          {!authData && (
            <DefaultInput
              baseStyle={styles.margin10Bottom}
              error={errors.message}
              leftIcon={icons.message.mailGray}
              hasError={inputHasError(errors.fields, 'email')}
              placeholder={translate('email', true)}
              value={email}
              autoComplete={'email'}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              autoCorrect={false}
              onChangeText={val => setEmail(val)}
            />
          )}
          <DefaultInput
            baseStyle={styles.largeInput}
            error={errors.message}
            multiline={true}
            style={styles.input}
            hasError={inputHasError(errors.fields, 'message')}
            placeholder={translate('your_message')}
            value={message}
            autoCorrect={false}
            onChangeText={val => setMessage(val)}
          />
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              text={translate('buttons.send_message')}
              onPress={handleFormSubmit}
            />
          </View>
        </>
      )}
    </View>
  );
};
