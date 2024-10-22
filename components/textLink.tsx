import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../styles/global";

type TextLinkProps = {
  text: string;
  linkText: string;
  onPress?: () => void;
};

const TextLink = ({ text, linkText, onPress }: TextLinkProps) => {
  return (
    <Text style={styles.text}>
      {text}
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableWithoutFeedback>
    </Text>
  );
};

export default TextLink;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
    textDecorationLine: "underline",
  },
});
