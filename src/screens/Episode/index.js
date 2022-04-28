import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import shallow from 'zustand/shallow';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';

import Icon from '../../components/Icon';
import CharacterCard from '../../components/Cards/CharacterCard';
import BackButton from '../../components/Buttons/Back';

import { episodesStore } from '../../stores/EpisodesStore';
import { characterStore } from '../../stores/CharacterStore';

import { SCREEN_WIDTH } from '../../styles/metrics';
import { icons } from '../../assets';
import colors from '../../styles/colors';

import styles from './styles';

const Episode = ({ navigation }) => {
  const [
    selectedEpisode,
    favoriteEpisodeIds,
    addEpisodeToFavorite,
    removeEpisodeFromFavorite,
  ] = episodesStore(
    state => [
      state.selectedEpisode,
      state.favoriteEpisodeIds,
      state.addEpisodeToFavorite,
      state.removeEpisodeFromFavorite,
    ],
    shallow,
  );

  const [
    characters,
    favoriteCharacterIds,
    addCharacterToFavorites,
    removeCharacterFromFavorite,
  ] = characterStore(
    state => [
      state.characters,
      state.favoriteCharacterIds,
      state.addCharacterToFavorites,
      state.removeCharacterFromFavorite,
    ],
    shallow,
  );

  const imagePath = selectedEpisode.img_url.replace('http', 'https');

  const episodeCharacterIds = characterUrls =>
    characterUrls.map(url => parseInt(url.substring(url.lastIndexOf('/') + 1)));

  const episodeCharacters = characters.filter(character =>
    episodeCharacterIds(selectedEpisode.characters).includes(character.id),
  );

  const isEpisodeFavorite = episodeId => favoriteEpisodeIds.includes(episodeId);
  const isCharacterFavorite = characterId =>
    favoriteCharacterIds.includes(characterId);

  const handleOnCharacterFavoritePress = (isFavorite, characterId) => {
    isFavorite
      ? removeCharacterFromFavorite(characterId)
      : addCharacterToFavorites(characterId);
  };

  return (
    <ScrollView style={styles.base} contentContainerStyle={styles.container}>
      <FastImage
        source={{
          uri: imagePath,
          priority: FastImage.priority.normal,
        }}
        style={styles.background}
        resizeMode={FastImage.resizeMode.cover}
      >
        <BackButton onPress={() => navigation.goBack()} />
        <LinearGradient colors={colors.cardGradient} style={styles.gradient} />
      </FastImage>
      <View style={styles.content}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{selectedEpisode.name}</Text>
          <Pressable
            onPress={() =>
              isEpisodeFavorite(selectedEpisode.id)
                ? removeEpisodeFromFavorite(selectedEpisode.id)
                : addEpisodeToFavorite(selectedEpisode.id)
            }
          >
            <Icon
              style={styles.favoriteIcon}
              source={
                isEpisodeFavorite(selectedEpisode.id)
                  ? icons.favorite.full
                  : icons.favorite.gray
              }
            />
          </Pressable>
        </View>
        <View style={styles.sectionWrapper}>
          <Icon source={icons.director} />
          <Text style={styles.sectionTitle}>
            Directed by{' '}
            <Text style={styles.bold}>{selectedEpisode.director}</Text>
          </Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Icon source={icons.writer} />
          <Text style={styles.sectionTitle}>
            Written by <Text style={styles.bold}>{selectedEpisode.writer}</Text>
          </Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Icon source={icons.calendar} />
          <Text style={styles.sectionTitle}>
            Released in{' '}
            <Text style={styles.bold}>{selectedEpisode.air_date}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.carouselWrapper}>
        <Carousel
          data={episodeCharacters}
          loop={false}
          renderItem={({ item, index }) => (
            <CharacterCard
              key={index}
              onFavoritePress={() => {
                handleOnCharacterFavoritePress(
                  isCharacterFavorite(item.id),
                  item.id,
                );
              }}
              name={item.name}
              isFavorite={isCharacterFavorite(item.id)}
              imageUrl={item.img_url}
              origin={item.origin}
            />
          )}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH * 0.6}
        />
      </View>
    </ScrollView>
  );
};

export default Episode;
