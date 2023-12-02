import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Historic } from "_screens/Historic";


import { Home } from "_screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="historic" component={Historic} />

    </Navigator>
  );
}
