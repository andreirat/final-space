import AsyncStorage from '@react-native-community/async-storage';

const StorageSystem = AsyncStorage;

/**
 * @description Perform local storage operations
 * Store, get, remove
 */
class Storage {
  /**
   * @description Stores a value at the specified key.
   * Returns true if successful, false otherwise.
   * @param key: String
   * @param value: String
   * @returns Promise (Boolean)
   */
  static async store(key, value) {
    try {
      await StorageSystem.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
   * @description Retrieve a value with the specified key.
   * Returns the value if successful, null otherwise.
   * @param key: String
   * @returns Promise (String)
   */
  static async get(key) {
    try {
      const value = await StorageSystem.getItem(key);
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }

  /**
   * @description Remove a value with the specified key.
   * Returns true if successful, false otherwise.
   * @param key: String
   * @returns Promise (Boolean)
   */
  static async remove(key) {
    try {
      await StorageSystem.removeItem(key);
      return true;
    } catch (err) {
      return null;
    }
  }

  /**
   * @description Gets all keys known to your App, for all callers, libraries.
   * Returns an Array of Strings if successful, null otherwise
   * @returns Promise ([String])
   */
  static async getAllKeys() {
    try {
      return await StorageSystem.getAllKeys();
    } catch (err) {
      return null;
    }
  }

  /**
   * @description Clear all the stored data
   * @returns {Promise<void>}
   */
  static async clearAll() {
    await StorageSystem.clear();
  }
}

export default Storage;
