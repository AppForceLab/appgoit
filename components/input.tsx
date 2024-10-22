import { StyleSheet, TextInput, View } from "react-native";
import colors from "../styles/global";
import React, { FC } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  rightButton?: React.ReactNode;
  extraStyles?: object;
};

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  rightButton,
  extraStyles,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, extraStyles]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {rightButton}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.grey,
    borderRadius: 8,
  },

  input: {
    width: "100%",
    height: 50,
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    color: colors.black,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  extraPaddingg: {
    paddingRight: 100,
  },
});
