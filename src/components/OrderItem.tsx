import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { orderData } from '../data/dummydata'

const Item = ({ date, totalAmount, totalPrice }) => {
  <View>
    <Text>Date: {date}</Text>
    <Text>Total amount: {totalAmount}</Text>
    <Text>Total Price: {totalPrice}</Text>
  </View>
};

const OrderItem = () => {
  const renderItem = ({ item }) => (
    <Item title={item.date} />
  );

  return (
    <View>
      <FlatList
        data={orderData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})