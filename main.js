import React from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import DayCounts from './DayCounts';
import Dimensions from 'Dimensions';

// got array of gradients from http://www.perbang.dk/rgbgradient/
// gross gradient hack until exponent ports native dependencies for gradient colors
const GRAPH_SPACING = 80;
const SCREEN_MID_POINT = Dimensions.get('window').width/2;
const SCREEN_TOTAL_WIDTH = Dimensions.get('window').width * 3;
const SUNRISE_START = SCREEN_TOTAL_WIDTH * (3/12);
const SUNRISE_MID = SCREEN_TOTAL_WIDTH * (4.5/12);
const SUNRISE_END = SCREEN_TOTAL_WIDTH * (5/12);
const SUNSET_START = SCREEN_TOTAL_WIDTH * (7/12);
const SUNSET_MID = SCREEN_TOTAL_WIDTH * (8.5/12);
const SUNSET_END = SCREEN_TOTAL_WIDTH * (9/12);

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
    };
  }

  _doGradiant(e) {
    let currentMidPoint = SCREEN_MID_POINT + e.nativeEvent.contentOffset.x;
    console.log(currentMidPoint);
    if (currentMidPoint < SUNRISE_START) { // start at night time
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    } else if (currentMidPoint < SUNRISE_MID) { // do gradient from night to half day time
      Animated.spring(this.state.backgroundColor, {toValue: 1}).start();
    } else if (currentMidPoint < SUNRISE_END) { // do gradient from half day time to full day time
      Animated.spring(this.state.backgroundColor, {toValue: 2}).start();
    } else if (currentMidPoint < SUNSET_START) { // day time
      Animated.spring(this.state.backgroundColor, {toValue: 2}).start();
    } else if (currentMidPoint < SUNSET_MID) { // do gradient from night to day time
      Animated.spring(this.state.backgroundColor, {toValue: 1}).start();
    } else if (currentMidPoint < SUNSET_END) { // do gradient to night again
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    } else { // night time
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    }
  }

  render() {
    let backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1, 2],
      // dark blue, in between color, and bright orange
      // This can be elaborated on and create a more diverse and intense gradient pattern
      outputRange: ['#002A51','#725150','#FF814F'],
    });

    return (
      <Animated.View ref="container" style={[styles.container, {backgroundColor}]}>
        <ScrollView
        // on scroll event firing should couple with scroll event throttle
        onScroll = {(e) => {this._doGradiant(e)}}
        horizontal={true}
        // min 0, max 16 for scroll event throttle. default is 1 (doesn't fire enough)
        scrollEventThrottle={10}
        scrollsToTop={false}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets = {false}
        style={[styles.scrollViewBackground, this.props.style]}>
          <DayCounts graphHeight={Dimensions.get('window').height/2} timeThird={0}/>
          <DayCounts graphHeight={Dimensions.get('window').height/2} timeThird={1}/>
          <DayCounts graphHeight={Dimensions.get('window').height/2} timeThird={2}/>
        </ScrollView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2,
    marginTop: Platform.OS === 'ios' ? 24 : 48,
    alignSelf: 'center',
    overflow: 'visible',
  },
  scrollViewBackground: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    overflow: 'visible',
  },
});

AppRegistry.registerComponent('main', () => AppContainer);
