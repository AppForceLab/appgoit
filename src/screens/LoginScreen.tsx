import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../styles/global";

import Input from "../components/input";
import InputBtn from "../components/inputBtn";
import ActionBtn from "../components/actionBtn";
import { useState } from "react";
import TextLink from "../components/textLink";
import { loginDB, registerDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const { width: SCR_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const disatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("Login with - ", email, password);
    loginDB({ email, password }, disatch);
    setPassword("");
    setEmail("");
    // navigation.navigate("LoggedIn");
  };

  console.log(email, password);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/bg.png")} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={(text) => setEmail(text)}
                secureTextEntry={false}
              />
              <Input
                placeholder="Пароль"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={showPassword}
                rightButton={InputBtn("Показати", handleShowPassword)}
                extraStyles={{ paddingRight: 100 }}
              />
            </View>

            <View style={styles.buttonContainer}>
              <ActionBtn text={"Увійти"} onPress={handleLogin} />
              <TextLink
                text={"Немає акаунту? "}
                linkText={"Зареєструватися"}
                onPress={() => navigation.navigate("Registration")}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    height: "100%",
  },
  text: {
    fontFamily: "Roboto-Bold",
  },
  image: {
    width: SCR_WIDTH,
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },

  formContainer: {
    width: SCR_WIDTH,
    height: "60%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  title: {
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    gap: 16,
    marginBottom: 42,
  },
  buttonContainer: {
    gap: 16,
    borderRadius: 100,
  },
  keyboardAvoid: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

