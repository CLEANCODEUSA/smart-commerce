import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import localData from '../data/items.json'
import { dummyData } from '../data/dummydata';
import OrderItem from './OrderItem';

const MyOrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={
          ({ item }) => <OrderItem item={item} />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default MyOrderScreen;
