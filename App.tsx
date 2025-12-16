import { StyleSheet, ActivityIndicator } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Montserrat": require("./src/assets/fonts/montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/montserrat/Montserrat-Bold.ttf")
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />
  }

  return (
    <>
      <NavigationContainer>
        <FlashMessage position={"top"} />
        <MainAppStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
