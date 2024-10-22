import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../styles/global";

const { width: SCR_WIDTH } = Dimensions.get("screen");

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/bg.png")} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.inputContainer}>

        </View>

        <View style={styles.buttonContainer}>

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
    marginBottom: 42,
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    marginBottom : 16,
    backgroundColor: colors.grey,
    borderRadius: 100,
  }
});
