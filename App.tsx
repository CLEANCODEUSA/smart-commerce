import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/AppButton';

export default function App() {
  return (
    <>
    <FlashMessage position={"top"}/>
    <AppSaveView style={styles.container}>
      <AppButton title={"Show Message"} />
      <AppText 
        onPress={() => {
          showMessage({
            message: "Hello World ^_^!",
            color: "yellow",
            type:"danger"
          })
        }}
      variant='bold'>Hello World!</AppText>
    </AppSaveView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
