import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppTextInput from './src/components/inputs/AppTextInput';
import SignInScreen from './src/screens/auth/SignInScreen';

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <SignInScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
