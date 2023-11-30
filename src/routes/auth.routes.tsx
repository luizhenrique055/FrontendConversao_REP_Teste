import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Home } from "_screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="sighIn">
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
