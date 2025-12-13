import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/AppButton';
import { AppColors } from './src/styles/colors';

export default function App() {
  return (
    <>
      <AppSaveView style={styles.container}>
        <FlashMessage position={"top"} />
        <AppButton title={"Show Message"} 
          onPress={() =>{
            showMessage({
              message: "Hello World ^_^!",
              color: "white",
              type: "danger"
            })
          }}
          backgroundColor='red'
          textColor={AppColors.white}
          />
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
