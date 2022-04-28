import React, { useState, useCallback } from 'react';
import { ScrollView, Text } from 'react-native';
import shallow from 'zustand/shallow';

import styles from './styles';
import { icons } from 'assets';
import { inputHasError, translate } from 'utils';
import DefaultInput from 'components/Inputs/DefaultInput';
import { useUserStore } from 'stores/UserStore';

export const EditProfile = () => {
  const [user, fetch, loading] = useUserStore(
    useCallback(state => [state.user, state.fetch, state.loading], []),
    shallow,
  );
  const updateUser = useUserStore(state => state.updateUser);

  const [errors, setErrors] = useState({
    message: '',
    fields: [],
  });

  return (
    <ScrollView style={styles.container}>
      <DefaultInput
        leftIcon={icons.profile.gray}
        placeholder={translate('first_name')}
        value={user.first_name}
        error={errors.message}
        hasError={inputHasError(errors.fields, 'first_name')}
        autoComplete={'name'}
        textContentType={'familyName'}
        autoCapitalize={'none'}
        clearButtonMode={'while-editing'}
        autoCorrect={false}
        returnKey={'next'}
        onChangeText={value => updateUser({ first_name: value })}
        baseStyle={styles.inputBaseStyle}
      />
      <DefaultInput
        leftIcon={icons.profile.gray}
        placeholder={translate('last_name')}
        value={user.last_name}
        error={errors.message}
        hasError={inputHasError(errors.fields, 'last_name')}
        autoComplete={'name'}
        textContentType={'givenName'}
        autoCapitalize={'none'}
        clearButtonMode={'while-editing'}
        autoCorrect={false}
        returnKey={'next'}
        onChangeText={() => {}}
      />
    </ScrollView>
  );
};
