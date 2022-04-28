import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { icons } from 'assets';
import styles from './styles';

const InfoCard = ({ leftIcon, title, subtitle, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.base}>
      <View style={styles.leftSection}>
        <View style={styles.leftIcon}>{leftIcon ? leftIcon : null}</View>
        <View style={styles.textWrapper}>
          <Text adjustsFontSizeToFit={true} style={styles.title}>
            {title}
          </Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      {onPress && (
        <View style={styles.rightArrow}>
          <Image source={icons.arrow.right} />
        </View>
      )}
    </Pressable>
  );
};

export default InfoCard;
