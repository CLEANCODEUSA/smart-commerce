import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../constants/images-paths'
import { s, vs } from 'react-native-size-matters'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/AppButton'
import AppText from '../../components/texts/AppText'
import { AppColors } from '../../styles/colors'
import { useNavigation } from "@react-navigation/native"

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <AppText style={styles.appName}>Smart ECommerce</AppText>
      <AppButton title='Login'
        title='Sign In'
        style={styles.registerButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("MainAppBottomTabs")}
      />
      <AppButton
        title='Sign Up'
        style={styles.registerButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppSaveView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30)
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15)
  },
  registerButton: {
    backgroundColor: AppColors.blueGray,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary
  }
})
