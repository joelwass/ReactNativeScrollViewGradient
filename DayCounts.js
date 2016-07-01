'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HourCount from './HourCounts';
import Dimensions from 'Dimensions';

const HOUR_SPACING = [
  { key: 1, value: 10 },
];

export default class DayCounts extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      graphHeight: this.props.graphHeight,
      //time third could be 0, 1, or 2. based on which third of time we're looking at (7pm to 5am.. etc)
      timeThird: this.props.timeThird,
    };
  }

  // get the top time labels for the current scroll view histogram
  _getTimeLabels() {
    switch (this.state.timeThird) {
      case 0:
        return ["7pm", "9pm", "11pm", "1am", "3am", "5am"];
      case 1:
        return ["7am", "9am", "11am", "1pm", "3pm", "5pm"];
      case 2:
        return ["7pm", "9pm", "11pm", "1am", "3am", "5am"];
      default:
        console.log("should never get here line dayCounts timeThird switch");
    }
  }

// create random number between 0 and 100 or whatever our max value is or should be
  _getRandomBarHeight() {
    return Math.random() * ((this.state.graphHeight*2/3) - 0) + 0;
  }

  render() {
    return (
      <View style={styles.dayCountContainer}>
        <View style={styles.timeLabels}>
          <Text style={styles.times}>{this._getTimeLabels()[0]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[1]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[2]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[3]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[4]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[5]}</Text>
        </View>
        <View style={styles.bars}>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()} graphHeight={this.state.graphHeight}/>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  timeLabels: {
    position: 'absolute',
    flexDirection: 'row',
  },
  smallFontSize: {
    fontSize: 10,
  },
  times: {
    color: 'white',
    fontSize: 12,
    marginTop: 14,
    //margin calculation: each label is roughly 27 wide, so 6 labels * 27 wide = 162. then divide by 12 because 6 gaps to fill
    marginLeft:(Dimensions.get('window').width-162)/12,
    marginRight:(Dimensions.get('window').width-162)/12,
  },
  dayCountContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
