import React from 'react';

import SegmentedButton from 'components/Buttons/Segmented';
import styles from './styles';

const getRightButton = ({ step, onForward }) => {
  if (step === 3) {
    return {};
  }
  return {
    onPressRight: onForward,
  };
};

const getLeftButton = ({ step, onBack }) => {
  if (step === 1) {
    return {};
  }
  return {
    onPressLeft: onBack,
  };
};

const getCenterButtonText = ({ step }) => {
  return step === 3 ? 'Continue' : 'Skip';
};

const TutorialSegmentedButton = props => {
  const leftButton = getLeftButton(props);
  const rightButton = getRightButton(props);
  const centerButtonText = getCenterButtonText(props);

  return (
    <SegmentedButton
      style={styles.button}
      textStyle={styles.buttonText}
      centerButtonText={centerButtonText}
      onPressCenter={props.onSkip}
      {...leftButton}
      {...rightButton}
    />
  );
};

export default TutorialSegmentedButton;
