import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from './styles';

const TutorialContent = props => {
  return (
    <View style={styles.base}>
      <Swiper
        ref={props.swiperRef}
        loop={false}
        showsPagination={false}
        onIndexChanged={index => props.setStep(index + 1)}>
        <Step1 />
        <Step2 />
        <Step3 />
      </Swiper>
    </View>
  );
};

export default TutorialContent;
