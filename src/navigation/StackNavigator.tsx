import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MapScreen from "../screens/MapScreen";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);

  return (
    <Stack.Navigator initialRouteName="Login">
      {user ? (
        <>
          <Stack.Screen
            name="LoggedIn"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
