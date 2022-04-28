import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import shallow from 'zustand/shallow';

import { useOverlay } from 'providers/OverlayProvider';
import styles from './styles';

import { useUserStore } from 'stores/UserStore';
import { useAuth } from 'providers/AuthProvider';

export const Home = () => {
  const [fetch] = useUserStore(state => [state.fetch], shallow);
  const { authData } = useAuth();

  useEffect(() => {
    async function fetchData() {
      fetch();
    }

    if (authData) {
      fetchData();
    }
  }, [fetch, authData]);

  const overlay = useOverlay();
  return (
    <View style={styles.base}>
      <Button
        onPress={() => overlay.toggle(5000, 'loading')}
        title={'Toggle'}
      />
    </View>
  );
};
