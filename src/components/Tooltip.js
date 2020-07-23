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
let listDot = [];
const renderCarousel = (totalStep, currentStep) => {
  for (let i = 0; i < totalStep; i++) {
    if (listDot.length < totalStep) {
      listDot.push(i)
    }
  };
  const renderListDot = listDot.map((item, index) => (
    <View key={index} style={{
      width: 5,
      height: 5,
      borderColor: '#b0b0b0',
      borderRadius: 2.5,
      marginLeft: 5,
      backgroundColor: index === (currentStep - 1) ? '#a4a4a4' : '#d8d8d8'
    }} />
  ));
  return renderListDot;
}

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
  isIphoneOld,
  totalNumberStep
}: Props) => (
    <View style={{
      // borderWidth:1,
      padding: isIphoneOld ? 10 : 18,
      // marginBottom: 15,
      width: '100%'
    }}>
      <View style={styles.tooltipContainer}>
        <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
      </View>

      <View style={[styles.bottomBar]}>
        <TouchableOpacity onPress={() => {
          listDot = [];
          handleStop();
        }}
          style={{
            marginRight: 0,
            borderRadius: 5,
            paddingHorizontal:isIphoneOld ? 7 : 10,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5'
          }}>
          <Button style={{
            color: '#464646'
          }} >{labels.skip || 'Skip'}</Button>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
          {renderCarousel(totalNumberStep, currentStep.order)}
        </View>
        {
          !isLastStep ?
            <TouchableOpacity style={{
              borderRadius: 5,
              width: 60,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0779ff'
            }}
              onPress={handleNext}>
              <Button style={{
                color: '#fff'
              }}>{labels.next || 'Next'}</Button>
            </TouchableOpacity> :
            <TouchableOpacity
              style={{
                borderRadius: 5,
                width: 60,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0779ff'
              }}
              onPress={() => {
                listDot = []
                handleStop();
              }}>
              <Button style={{
                color: '#fff',
              }}>{labels.finish || 'Finish'}</Button>
            </TouchableOpacity>
        }
      </View>

    </View>
  );

export default Tooltip;
