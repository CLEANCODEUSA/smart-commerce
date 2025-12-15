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

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigation();

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="User Name" onChangeText={setUserName} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <AppText style={styles.appName}>Smart ECommerce</AppText>
      <AppButton
        title='Create New Account'
        onPress={() => navigate.navigate("SignUpScreen")}
      />
      <AppButton
        title='Go To Sign In'
        style={styles.signInButton}
        textColor={AppColors.primary}
        onPress={() => navigate.navigate("SignInScreen")}
      />
    </AppSaveView>
  )
}

export default SignUpScreen

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
  signInButton: {
    backgroundColor: AppColors.blueGray,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary
  }
})
