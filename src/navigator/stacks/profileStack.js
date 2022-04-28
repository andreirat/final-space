import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import { Profile } from 'screens/Profile/profile';
import { EditProfile } from 'screens/Profile/EditProfile';
import { PrivacyPolicy } from 'screens/PrivacyPolicy';
import { ContactUs } from 'screens/ContactUs';
import { FrequentlyAskedQuestions } from 'screens/FAQ';

import { translate } from 'utils';
import { stackOptions } from '../helpers';

const ProfileStack = createNativeStackNavigator();

export const UserProfileStack = () => (
  <ProfileStack.Navigator
    initialRouteName={'Profile'}
    screenOptions={stackOptions}
  >
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ headerTitle: translate('edit_profile', true) }}
    />
    <ProfileStack.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={{ headerTitle: 'Privacy Policy' }}
    />
    <ProfileStack.Screen
      name="ContactUs"
      component={ContactUs}
      options={{ headerTitle: translate('contact_us', true) }}
    />
    <ProfileStack.Screen
      name="FAQ"
      component={FrequentlyAskedQuestions}
      options={{ headerTitle: translate('faq', true) }}
    />
  </ProfileStack.Navigator>
);
