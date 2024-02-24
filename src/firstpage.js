import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ButtonScreen = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Ir para a Home" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonScreen;
