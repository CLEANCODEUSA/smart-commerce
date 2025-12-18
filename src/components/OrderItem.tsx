import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {
  // console.log(item.item.id);
  return (
    <View>
      <Text>{item.date}</Text>
      <Text>{item.totalAmount}</Text>
      <Text>{item.totalPrice}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})