'use strict';

import React from 'react';
import {
  View,
  Text,
  PropTypes,
  TextInput,
  StyleSheet,
} from 'react-native';
import Dimensions from 'Dimensions';

export default class HourCounts extends React.Component {
  constructor(props) {
    super(props);
    this.setMarginLeft = this.setMarginLeft.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  setMarginLeft () {
      return { marginLeft: (Dimensions.get('window').width-144)/25};
  };

  setHeight () {
    return { height: this.props.barHeight, marginTop: this.props.graphHeight-this.props.barHeight};
  };

  render () {
    return (
      <View>
        <View style={[style.hourCountBar,this.setMarginLeft(), this.setHeight()]} />
      </View>
    );

  }
}

let style = StyleSheet.create({
  hourCountBar: {
    width: 6,
    backgroundColor: 'white',
    borderRadius: 2,
  },
});
