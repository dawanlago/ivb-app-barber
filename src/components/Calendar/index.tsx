import {Dimensions, View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import React from 'react';
import {styles} from './styles';
const days = [{day: '7'}, {day: '8'}, {day: '9'}, {day: '10'}, {day: '11'}];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.2;

export default function Calendar() {
  function renderItem({item}) {
    return (
      <View style={styles.calendarContainer}>
        <Text style={styles.calendar}>{item.day}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textMonth}>Novembro</Text>
      <Carousel
        data={days}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        renderItem={renderItem}
        useScrollView={true}
        vertical={false}
        activeSlideAlignment="center"
      />
    </View>
  );
}
