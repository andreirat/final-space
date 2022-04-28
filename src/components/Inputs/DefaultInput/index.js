import React, { useState } from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';

import styles from './styles';
import Icon from 'components/Icon';
import { icons } from 'assets';

const DefaultInput = props => {
  const [hidePassword, setHidePassword] = useState(true);

  const inputStyle = [
    styles.input,
    props.style,
    props.isPassword && styles.inputPassword,
    props.multiline && styles.multiline,
  ];

  const baseStyle = [
    styles.base,
    props.baseStyle,
    props.hasError && styles.error,
  ];

  return (
    <View>
      <View style={baseStyle}>
        <Icon source={props.leftIcon} style={styles.icon} />

        <TextInput
          ref={props.inputRef}
          style={inputStyle}
          multiline={props.multiline || false}
          secureTextEntry={props.isPassword && hidePassword}
          underlineColorAndroid="transparent"
          blurOnSubmit={true}
          returnKeyType={props.returnKey || 'done'}
          {...props}
        />
        {props.isPassword && (
          <Pressable onPress={() => setHidePassword(!hidePassword)}>
            {hidePassword ? (
              <Icon source={icons.password.show} style={styles.icon} />
            ) : (
              <Icon source={icons.password.hide} style={styles.icon} />
            )}
          </Pressable>
        )}
      </View>
      {props.hasError && <Text>{props.error.message}</Text>}
    </View>
  );
};

export default DefaultInput;
