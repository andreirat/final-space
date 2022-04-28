import create from 'zustand';
import * as profileAPI from 'api/profile';
import { log } from 'utils/store';
import { immer } from 'utils/store';

export const contactUsStore = create(
  log(
    immer(set => ({
      submitted: false,
      sendContactUs: async payload => {
        profileAPI.contactUs(payload).then(_ => {
          set({
            submitted: true,
          });
        });
      },
    })),
  ),
);
