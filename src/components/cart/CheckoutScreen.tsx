import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../views/AppSaveView'
import AppTextInput from '../inputs/AppTextInput'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import AppButton from '../AppButton'
import { commonStyles } from '../../styles/sharedStyles'
import { IS_Android, IS_IOS } from '../../constants/constants'

const CheckoutScreen = () => {
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View stye={styles.inputsContainer}>
          <AppTextInput placeholder='Full Name' />
          <AppTextInput placeholder='Phone Number' />
          <AppTextInput placeholder='Detailed Address' />
        </View>
      </View>
      <View style={styles.buttonBottomContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSaveView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  buttonBottomContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10)
  }
})
