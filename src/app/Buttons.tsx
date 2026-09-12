import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function Button({ title, onPress, style }: AppButtonProps) {
  return (
    <Pressable onPress={onPress}
    style={({ pressed})  => [buttonStyle.button, pressed && buttonStyle.pressed, style,
    ]}>
      <Text style={buttonStyle.text}>{title}</Text>
    </Pressable>
  );
}

const buttonStyle = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "black",
    fontWeight: "bold",

  },
});