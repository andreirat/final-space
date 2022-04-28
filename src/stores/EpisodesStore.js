import create from 'zustand';
import * as episodesAPI from '../api/episodes';
import { log } from '../utils/store';
import { immer } from '../utils/store';

export const episodesStore = create(
  log(
    immer(set => ({
      refreshing: false,
      selectedEpisode: null,
      episodes: [],
      favoriteEpisodeIds: [],
      fetch: async () => {
        set({ refreshing: true });
        episodesAPI.fetchEpisodes().then(response => {
          set({
            episodes: response,
            refreshing: false,
          });
        });
      },
      setSelectedEpisode: async episode => set({ selectedEpisode: episode }),
      addEpisodeToFavorite: async episodeId =>
        set(state => ({
          favoriteEpisodeIds: [...state.favoriteEpisodeIds, episodeId],
        })),
      removeEpisodeFromFavorite: async episodeId =>
        set(state => ({
          favoriteEpisodeIds: state.favoriteEpisodeIds.filter(
            id => id !== episodeId,
          ),
        })),
    })),
  ),
);
