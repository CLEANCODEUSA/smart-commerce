import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../styles/colors'
import AppText from './texts/AppText'

interface AppButtonProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
  backgroundColor?: string
  textColor?: string
  style?: ViewStyle | ViewStyle[]
  styleTitle?: TextStyle | TextStyle[]
  disabled?: boolean
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.blueGray,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: disabled ? AppColors.disabledGray : backgroundColor },
        style,
      ]}
      disabled={disabled}
    >
      <AppText
        variant="bold"
        style={[styles.textTitle, { color: textColor }, styleTitle]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: vs(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(25),
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: s(16),
  },
})
