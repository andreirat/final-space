import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import { useAuth } from 'providers/AuthProvider';
import DefaultInput from 'components/Inputs/DefaultInput';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import UserService from 'services/User';
import * as authAPI from 'api/auth';
import LinkButton from 'components/Buttons/Link';
import { translate, inputHasError } from 'utils';
import { showErrorToast } from 'utils/toast';
import styles from './styles';
import { icons, backgrounds } from 'assets';
import { useOverlay } from 'providers/OverlayProvider';

export const Login = ({ navigation }) => {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    message: '',
    fields: [],
  });
  const overlay = useOverlay();

  const handleEmailInputChange = value => {
    setEmail(value);
  };

  const onLoginButtonPress = () => {
    const emailValidation = UserService.validateEmail(email);
    if (!emailValidation.isValid) {
      showErrorToast(emailValidation.message);
      return setErrors({ message: emailValidation.message, fields: ['email'] });
    }

    const passwordValidation = UserService.validateLoginPassword(password);
    if (!passwordValidation.isValid) {
      showErrorToast(passwordValidation.message);
      return setErrors({
        message: passwordValidation.message,
        fields: ['password'],
      });
    }

    setErrors({
      message: '',
      fields: [],
    });

    const credentials = {
      email,
      password,
    };
    overlay.show('loading');
    authAPI
      .login(credentials)
      .then(res => {
        auth.signIn(res);
        overlay.hide();
        navigation.navigate('Profile');
      })
      .catch(error => {
        overlay.hide();
        showErrorToast(error.message);
      });
  };

  return (
    <ImageBackground style={styles.base} source={backgrounds.login}>
      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{`${translate(
            'titles.login_page',
          )},`}</Text>
          {/*<Text style={styles.subtitle}>*/}
          {/*  {translate('subtitles.welcome_back')}*/}
          {/*</Text>*/}
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.iconWrapper}>
            <DefaultInput
              leftIcon={icons.message.mailGray}
              placeholder={translate('email', true)}
              value={email}
              error={errors.message}
              hasError={inputHasError(errors.fields, 'email')}
              autoComplete={'email'}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              autoCapitalize={'none'}
              clearButtonMode={'while-editing'}
              autoCorrect={false}
              returnKey={'next'}
              onChangeText={handleEmailInputChange}
            />
          </View>
          <View style={styles.iconWrapper}>
            <DefaultInput
              isPassword={true}
              showIcon={false}
              leftIcon={icons.lock}
              error={errors.message}
              hasError={inputHasError(errors.fields, 'password')}
              placeholder={translate('password', true)}
              value={password}
              autoComplete={'password'}
              autoCorrect={false}
              textContentType={'password'}
              returnKey={'done'}
              onChangeText={val => setPassword(val)}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <PrimaryButton
          text={translate('buttons.login', true)}
          onPress={onLoginButtonPress}
        />
      </View>
      <LinkButton
        text={`${translate('buttons.forgot_your_password')}?`}
        onPress={() => {}}
      />
    </ImageBackground>
  );
};
