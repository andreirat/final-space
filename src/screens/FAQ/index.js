import React from 'react';
import { ScrollView } from 'react-native';

import { CollapsableView } from 'components/CollapsableView';
import { translate } from 'utils';
import styles from './styles';

export const FrequentlyAskedQuestions = () => {
  const SECTIONS = [
    {
      title: translate('faqItems.one.title'),
      content: translate('faqItems.one.content'),
    },
    {
      title: translate('faqItems.two.title'),
      content: translate('faqItems.two.content'),
    },
    {
      title: translate('faqItems.three.title'),
      content: translate('faqItems.three.content'),
    },
    {
      title: translate('faqItems.four.title'),
      content: translate('faqItems.four.content'),
    },
    {
      title: translate('faqItems.five.title'),
      content: translate('faqItems.five.content'),
    },
    {
      title: translate('faqItems.six.title'),
      content: translate('faqItems.six.content'),
    },
    {
      title: translate('faqItems.seven.title'),
      content: translate('faqItems.seven.content'),
    },
    {
      title: translate('faqItems.eight.title'),
      content: translate('faqItems.eight.content'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <CollapsableView sections={SECTIONS} />
    </ScrollView>
  );
};
