import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import shallow from 'zustand/shallow';

import Header from '../../components/Header';
import EpisodeCard from '../../components/Cards/EpisodeCard';

import { episodesStore } from '../../stores/EpisodesStore';
import { characterStore } from '../../stores/CharacterStore';

import styles from './styles';
import { EpisodeProps } from 'src/screens/Episodes/props';

const Episodes = ({ navigation }) => {
  const [refreshing, setSelectedEpisode, episodes, fetch] = episodesStore(
    state => [
      state.refreshing,
      state.setSelectedEpisode,
      state.episodes,
      state.fetch,
    ],
    shallow,
  );

  const [fetchCharacters] = characterStore(
    state => [state.fetchCharacters],
    shallow,
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleListRefresh = () => {
    fetch(true);
  };

  const handleCardPress = async (episode: EpisodeProps) => {
    await setSelectedEpisode(episode);
    navigation.navigate('Episode');
  };

  return (
    <View style={styles.base}>
      <Header title={'Space Final Episodes'} />
      <FlatList
        data={episodes}
        refreshing={refreshing}
        onRefresh={handleListRefresh}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <EpisodeCard
            name={item.name}
            date={item.air_date}
            imageUrl={item.img_url}
            onPress={() => handleCardPress(item)}
          />
        )}
      />
    </View>
  );
};

export default Episodes;
