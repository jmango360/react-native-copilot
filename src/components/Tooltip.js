// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
  isIphoneOld
}: Props) => (
  <View style={{
    //  borderWidth :1,
     borderColor: 'blue',
     marginBottom: 15,
     marginHorizontal: 7
     }}>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleStop} style={{paddingRight: 15 }}>
            <Button isIphoneOld={isIphoneOld}>{labels.skip || 'Skip'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev} style={{ paddingRight: 7}}>
            <Button isIphoneOld={isIphoneOld}>{labels.previous || 'Previous'}</Button>
          </TouchableOpacity>
          : null
      }
      <View/>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext}>
            <Button isIphoneOld={isIphoneOld}>{labels.next || 'Next'}</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button isIphoneOld={isIphoneOld}>{labels.finish || 'Finish'}</Button>
          </TouchableOpacity>
      }
    </View>
  </View>
);

export default Tooltip;
