import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import Title from '../../Title';
import Icon from '../../Icon';

import { CharacterCardProps } from './props';

import { icons } from '../../../assets';
import colors from '../../../styles/colors';
import styles from './styles';

const CharacterCard = ({
  name,
  imageUrl,
  origin,
  isFavorite,
  onFavoritePress,
}: CharacterCardProps) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      >
        {isFavorite !== undefined && (
          <Pressable onPress={onFavoritePress} style={styles.favoriteButton}>
            <Icon
              style={styles.favoriteIcon}
              source={isFavorite ? icons.favorite.full : icons.favorite.gray}
            />
          </Pressable>
        )}
      </FastImage>
      <View>
        <LinearGradient
          colors={colors.characterCardGradient}
          style={styles.gradient}
        >
          <Title style={styles.name} title={name} />
          <View style={styles.section}>
            <Icon source={icons.location} />
            <Text style={styles.sectionDetails}>{origin}</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default React.memo(CharacterCard);
