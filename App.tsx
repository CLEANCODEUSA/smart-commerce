import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function App() {
  return (
    <>
      <AppSaveView style={styles.container}>
        <FlashMessage position={"top"} />
        <AppText variant='medium'>Hello World!</AppText>
        <AppText
          onPress={() =>{
            showMessage({
              message: "Hello World ^_^!",
              color: "white",
              type: "danger"
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
