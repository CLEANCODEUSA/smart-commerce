import { createStackNavigator } from "@react-navigation/stack"
import CheckoutScreen from "../components/cart/CheckoutScreen"
import AuthStack from "./AuthStack"
import MainAppBottomTabs from "./MainAppBottomTabs"
import MyOrderScreen from "../components/MyOrderScreen"

const Stack = createStackNavigator()

export default function MainAppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: true }} />
      <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}
