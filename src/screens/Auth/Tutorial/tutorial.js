import React, { Component } from 'react';
import { View } from 'react-native';

import Content from './Content';
import SegmentedButton from './SegmentedButton';
import { TutorialService } from 'services';
import { NavigatorService } from 'services';
import styles from './styles';
import { DEFAULT_ROUTE } from 'config';

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onSkip = this.onSkip.bind(this);
    this.scrollSwiperBy = this.scrollSwiperBy.bind(this);
  }

  scrollSwiperBy(index) {
    this.swiper.scrollBy(index);
  }

  onBack() {
    const step = this.props.step;
    this.scrollSwiperBy(-1);
    this.props.setStep(step - 1);
  }

  onForward() {
    const step = this.props.step;
    this.scrollSwiperBy(1);
    this.props.setStep(step + 1);
  }

  async onSkip() {
    NavigatorService.navigate(DEFAULT_ROUTE);
    await TutorialService.markAsRead();
  }

  render() {
    const props = this.props;

    return (
      <View style={styles.base}>
        <Content
          swiperRef={ref => (this.swiper = ref)}
          step={props.step}
          setStep={props.setStep}
        />

        <SegmentedButton
          step={props.step}
          onBack={this.onBack}
          onForward={this.onForward}
          onSkip={this.onSkip}
        />
      </View>
    );
  }
}
