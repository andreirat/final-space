import create from 'zustand';
import * as userAPI from 'api/user';
import { log } from 'utils/store';
import { immer } from 'utils/store';

export const useUserStore = create(
  log(
    immer(set => ({
      user: {},
      loading: false,
      fetch: async () => {
        set({ loading: true });
        const response = await userAPI.getProfile();
        set({ user: response, loading: false });
      },
      updateUser: user => {
        set(state => ({
          user: { ...state.user, ...user },
        }));
      },
    })),
  ),
);
