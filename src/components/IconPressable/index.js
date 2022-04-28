import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'components/Icon';

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

const IconPressable = props => {
  if (!props.source) {
    return null;
  }

  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      hitSlop={hitSlop}
      style={props.containerStyle}
    >
      <Icon style={props.iconStyle} source={props.source} />
    </TouchableOpacity>
  );
};

export default IconPressable;
