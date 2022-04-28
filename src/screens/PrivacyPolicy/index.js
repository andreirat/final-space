import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTranslation } from 'react-i18next';

import styles from './styles';

export const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const getUserLanguage = () => {
    switch (selectedLanguageCode) {
      case 'ro':
        return 'ro';
      default:
        return 'en';
    }
  };

  return (
    <View style={styles.base}>
      <View style={styles.webViewContainer}>
        <WebView
          style={styles.webView}
          source={{
            uri: `https://salon365.ro/${getUserLanguage()}/privacy-policy`,
          }}
        />
      </View>
    </View>
  );
};
