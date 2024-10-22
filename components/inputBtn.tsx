import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../styles/global";

const InputBtn = (text: string, onPress: () => void) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default InputBtn;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
  },
});
