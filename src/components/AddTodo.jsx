import React from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    } else {
      Alert.alert(`Can't be empty`);
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter the name of todo..."
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
