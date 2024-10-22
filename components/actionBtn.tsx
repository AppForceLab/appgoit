import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../styles/global";

type ActionBtnProps = {
  text: string;
  onPress?: () => void;
};

const ActionBtn = ({ text, onPress }: ActionBtnProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.white,
  },
});
