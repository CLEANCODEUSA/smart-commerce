import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/texts/AppText'
import { s, vs } from "react-native-size-matters"
import { AppFonts } from '../../styles/fonts'
import { AppColors } from '../../styles/colors'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const EmptyCart = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name='shopping-outline'
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart is Empty</AppText>
      <AppText style={styles.subTitle}>Browse our products and find something you like.</AppText>
      <AppButton title="Start Shopping" style={styles.button}
        onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20)
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Regular,
    color: AppColors.primary,
    marginBottom: vs(10)
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Regular,
    color: AppColors.blueGray,
    textAlign: "center",
    marginBottom: vs(20)
  },
  button: {
    backgroundColor: AppColors.primary
  },
  icon: {
    marginBottom: vs(20),
    opacity: .9
  }
})