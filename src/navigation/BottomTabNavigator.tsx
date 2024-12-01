import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import PostsScreen from "../screens/PostsScreen";
import { Image } from "react-native-svg";
import AddIcon from "../../icons/AddIcon";
import LogoutButton from "../components/logoutButton";
import PostsButton from "../components/PostsButton";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import AddBtn from "../components/addBtn";
import BackButton from "../components/BackButton";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileButton from "../components/ProfileButton";
import { logoutDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ navigation }) => ({
        tabBarShowLabel: false,
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          tabBarIcon: () => (
            <PostsButton onPress={() => console.log("Posts")} focused={true} />
          ),
          tabBarShowLabel: false,
          headerRight: () =>
            LogoutButton({
              onPress: () => logoutDB(dispatch),
            }),
        })}
      />
      <Tab.Screen
        name="Create Poste"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: () => <BackButton />,
          tabBarIcon: ({ focused }) => (
            <AddBtn
              onPress={() => {
                console.log("add button");
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <ProfileButton
              focused={focused}
              onPress={() => console.log("Profile button pressed")}
            />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
