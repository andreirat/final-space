import React from 'react';
import { View, Text } from 'react-native';
import shallow from 'zustand/shallow';
import Carousel from 'react-native-snap-carousel';

import EpisodeCard from '../../components/Cards/EpisodeCard';
import CharacterCard from '../../components/Cards/CharacterCard';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { SCREEN_WIDTH } from '../../styles/metrics';
import { episodesStore } from '../../stores/EpisodesStore';
import { characterStore } from '../../stores/CharacterStore';

import { EpisodeProps } from '../Episodes/props';

import styles from './styles';

const Favorites = ({ navigation }) => {
  const [episodes, favoriteEpisodeIds, setSelectedEpisode] = episodesStore(
    state => [
      state.episodes,
      state.favoriteEpisodeIds,
      state.setSelectedEpisode,
    ],
    shallow,
  );

  const [characters, favoriteCharacterIds] = characterStore(
    state => [state.characters, state.favoriteCharacterIds],
    shallow,
  );

  const favoriteEpisodes = episodes.filter(episode =>
    favoriteEpisodeIds.includes(episode.id),
  );

  const favoriteCharacters = characters.filter(character =>
    favoriteCharacterIds.includes(character.id),
  );

  const handleCardPress = async (episode: EpisodeProps) => {
    await setSelectedEpisode(episode);
    navigation.navigate('Episode');
  };

  return (
    <View style={styles.base}>
      <Header title={'Favorites'} />
      {favoriteEpisodes.length === 0 || favoriteCharacters.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.noResultsTitle}>No favorite items</Text>
          <Text style={styles.noResultsText}>
            Add an episode or a character as favorite.
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.carouselWrapper}>
            {favoriteEpisodes.length > 0 && (
              <Title style={styles.title} title={'Episodes'} />
            )}
            <Carousel
              data={favoriteEpisodes}
              loop={false}
              renderItem={({ item }) => (
                <EpisodeCard
                  style={{ width: SCREEN_WIDTH * 0.7 }}
                  name={item.name}
                  date={item.air_date}
                  imageUrl={item.img_url}
                  onPress={() => handleCardPress(item)}
                />
              )}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH * 0.7}
            />
          </View>
          <View style={styles.carouselWrapper}>
            {favoriteCharacters.length > 0 && (
              <Title style={styles.title} title={'Characters'} />
            )}
            <Carousel
              data={favoriteCharacters}
              loop={false}
              renderItem={({ item, index }) => (
                <CharacterCard
                  key={index}
                  name={item.name}
                  imageUrl={item.img_url}
                  origin={item.origin}
                />
              )}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH * 0.7}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Favorites;
