import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todo = ({ todoItem, toggleAccomplishment }) => {
  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={() => toggleAccomplishment(todoItem.id, todoItem.accomplished)}
    >
      <Text style={[todoItem.accomplished && styles.strikeThrough]}>
        {todoItem.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
});
