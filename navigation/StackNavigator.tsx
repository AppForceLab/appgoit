import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          // presentation: "modal",
          headerShown: false,
        }}
        
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          // presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoggedIn"
        component={BottomTabNavigator}
        options={{
          // presentation: "modal",
          headerShown: false,
        }}
      />

<Stack.Screen
        name="Map"
        component={MapScreen} 
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
    
  );
};

export default StackNavigator;
