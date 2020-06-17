// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

type Props = {
  wrapperStyle: Object | number | Array,
  style: Object | number | Array,
  rest: Object | number | Array,
};

const Button = ({ wrapperStyle, style, ...rest }: Props) => (
  <View style={[styles.button, wrapperStyle]}>
    <Text style={[styles.buttonText, style,
       {fontSize: rest.isIphoneOld ? 12 : null}
       ]} {...rest} />
  </View>
);

export default Button;
