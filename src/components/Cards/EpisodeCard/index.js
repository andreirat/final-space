import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import { EpisodeCardProps } from './props';

import styles from './styles';
import colors from '../../../styles/colors';

const EpisodeCard = ({
  name,
  imageUrl,
  date,
  onPress,
  style,
}: EpisodeCardProps) => {
  const imagePath = imageUrl.replace('http', 'https');
  return (
    <Pressable onPress={onPress}>
      <FastImage
        source={{
          uri: imagePath,
          priority: FastImage.priority.normal,
        }}
        style={[styles.background, style]}
        resizeMode={FastImage.resizeMode.cover}
      >
        <LinearGradient colors={colors.cardGradient} style={styles.gradient}>
          <View style={styles.textWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </LinearGradient>
      </FastImage>
    </Pressable>
  );
};

export default React.memo(EpisodeCard);
