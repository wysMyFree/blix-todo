import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = ({ totalTasks, remainingTasks }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>
        {remainingTasks} remaining out of {totalTasks} tasks
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: "#3949ab",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
