import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../styles/global";

import Input from "../components/input";
import InputBtn from "../components/inputBtn";
import ActionBtn from "../components/actionBtn";
import { useState } from "react";

const { width: SCR_WIDTH } = Dimensions.get("screen");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/bg.png")} />
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
            secureTextEntry={true}
            rightButton={InputBtn("Показати")}
            extraStyles={{ paddingRight: 100 }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <ActionBtn text={"Увійти"} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    position: "absolute",
    bottom: 0,
    left: 0,
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
    marginBottom: 16,
    backgroundColor: colors.grey,
    borderRadius: 100,
  },
});
