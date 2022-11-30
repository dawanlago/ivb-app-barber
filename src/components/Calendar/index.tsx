import {Dimensions, View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import React, {useState} from 'react';
import {styles} from './styles';
const days = [{day: '30'}, {day: '1'}, {day: '2'}, {day: '3'}, {day: '4'}];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.2;

interface Day {
  day: string;
}

export default function Calendar() {
  const [month, setMonth] = useState<string>('Novembro');

  const handleMonth = (day: string) => {
    day !== '30' ? setMonth('Dezembro') : setMonth('Novembro');
  };

  function renderItem({item}: {item: Day}) {
    return (
      <View style={styles.calendarContainer}>
        <Text style={styles.calendar}>{item.day}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textMonth}>{month}</Text>
      <Carousel
        data={days}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        renderItem={renderItem}
        useScrollView={true}
        vertical={false}
        activeSlideAlignment="center"
        inactiveSlideOpacity={0.25}
        onSnapToItem={index => {
          handleMonth(days[index].day);
        }}
      />
    </View>
  );
}
