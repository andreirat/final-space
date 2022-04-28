import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import styles from './styles';
import Icon from 'components/Icon';
import { icons } from 'assets';

export const CollapsableView = ({ sections }) => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon style={styles.icon} source={getIcon(section)} />
      </View>
    );
  };

  const getIcon = section => {
    if (activeSections.length) {
      return sections[activeSections[0]].title === section.title
        ? icons.arrow.up
        : icons.arrow.down;
    }
    return icons.arrow.down;
  };

  const renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  const handleChange = prop => {
    setActiveSections(prop);
  };

  return (
    <Accordion
      containerStyle={styles.container}
      sectionContainerStyle={styles.sectionContainer}
      activeSections={activeSections}
      sections={sections}
      underlayColor={'white'}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={handleChange}
    />
  );
};
