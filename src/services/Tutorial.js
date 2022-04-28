import Storage from 'services/Storage';
import { INTRO_TUTORIAL_KEY } from 'config';

class TutorialService {
  static async isRead() {
    const value = await Storage.get(INTRO_TUTORIAL_KEY);
    return !!value;
  }

  static markAsRead() {
    return Storage.store(INTRO_TUTORIAL_KEY, 'true');
  }
}

export default TutorialService;
