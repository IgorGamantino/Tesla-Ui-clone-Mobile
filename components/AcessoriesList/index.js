import React from 'react';
import {View, Text, FlatList, Dimensions,Animated} from 'react-native';
import Accessories from "../Accessories";

import styles from './styles';
import accessories from './accessories';

const AccessoriesList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={accessories}
        renderItem={({item}) => <Accessories car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default AccessoriesList;
