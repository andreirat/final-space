import React from 'react';
import { Text, View } from 'react-native';
import initials from 'initials';
import styles from './styles';
import { FONTS } from 'styles/fonts';
import FastImage from 'react-native-fast-image';

const hasSource = props => {
  return props.src || props.source;
};

const getSource = props => {
  return props.src ? props.src : props.source;
};

const getSizeStyle = ({ size }) => {
  if (!size) {
    return {};
  }
  return {
    height: size,
    width: size,
    borderRadius: size / 2,
  };
};

export function Avatar(props) {
  const baseStyle = [
    styles.base,
    getSizeStyle(props),
    !hasSource(props) && styles.textContainer,
    !props.hideDropShadow && styles.dropShadow,
    props.style,
  ];

  if (!hasSource(props)) {
    const textStyle = [
      {
        fontSize: props.fontSize || 20,
        color: props.textColor || '#000',
        fontFamily: FONTS.primary.regular,
      },
    ];

    return (
      <View style={baseStyle}>
        <Text style={textStyle}>{props.name ? initials(props.name) : ''}</Text>
      </View>
    );
  }
  return (
    <View style={baseStyle}>
      <FastImage
        style={styles.img}
        source={{
          uri: getSource(props),
          priority: props.priority || FastImage.priority.normal,
        }}
        resizeMode={props.resizeMode || FastImage.resizeMode.cover}
      />
    </View>
  );
}
