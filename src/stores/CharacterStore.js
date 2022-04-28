import create from 'zustand';
import * as charactersAPI from '../api/characters';
import { log } from '../utils/store';
import { immer } from '../utils/store';

export const characterStore = create(
  log(
    immer(set => ({
      characters: [],
      fetching: false,
      favoriteCharacterIds: [],
      fetchCharacters: async () => {
        set({ fetching: true });
        charactersAPI.fetchCharacters().then(response => {
          set({
            characters: response,
            fetching: false,
          });
        });
      },
      addCharacterToFavorites: async characterId =>
        set(state => ({
          favoriteCharacterIds: [...state.favoriteCharacterIds, characterId],
        })),
      removeCharacterFromFavorite: async characterId =>
        set(state => ({
          favoriteCharacterIds: state.favoriteCharacterIds.filter(
            id => id !== characterId,
          ),
        })),
    })),
  ),
);
