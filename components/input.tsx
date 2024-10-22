import { StyleSheet, TextInput, View } from "react-native";
import colors from "../styles/global";
import React, { FC, useState } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  rightButton?: React.ReactNode;
  extraStyles?: object;
  onFocus?: () => void;
};

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  rightButton,
  extraStyles,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, extraStyles, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setIsFocused(true);
          onFocus && onFocus();
        }}
        onBlur={() => setIsFocused(false)}
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
  extraPadding: {
    paddingRight: 100,
  },
  inputFocused: {
    borderColor: colors.orange,
    borderWidth: 1,
    borderRadius: 8,
  },
});
