import { Text, View, StyleSheet } from "react-native";
import AppButton from "./Buttons";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <AppButton title="Alert" onPress={() => alert("Alert Button pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
