import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from './texts/AppText'
import { AppColors } from '../styles/colors'

const AppButton = ({onPress, title, backgroundColor = AppColors.primary, textColor = AppColors.black}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={
        [
          styles.button,
          {
            backgroundColor: backgroundColor
          }
        ]
      }
    >
      <AppText style={[styles.textTitle, {color: textColor}]} variant='bold'>{title}</AppText>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button:{
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center"
  },
  textTitle:{
    fontSize: s(16)
  }
})