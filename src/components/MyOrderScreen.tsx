import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import OrderItem from './OrderItem'

interface IMyOrderScreen {
  date: string,
  totalAmount: string | number,
  totalPrice: string | number
}

const MyOrderScreen: FC<IMyOrderScreen> = ({ date, totalAmount, totalPrice }) => {
  return (
    <View>
      <Text>Date: {date}</Text>
      <Text>Total amount: {totalAmount}</Text>
      <Text>Total Price: {totalPrice}</Text>
    </View>
  )
}

export default MyOrderScreen

const styles = StyleSheet.create({})