import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Navbar, AddTodo, Todo } from "../components";
import { TodoContext } from "../context/todoContext";

export const MainScreen = () => {
  const { todos, addTodo, accomplishTodo } = React.useContext(TodoContext);
  const remainingTasks = todos.reduce(
    (a, c) => (c.accomplished === false ? ++a : a),
    0
  );
  // console.log(todos);
  return (
    <View>
      <Navbar totalTasks={todos.length} remainingTasks={remainingTasks} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <Todo todoItem={item} toggleAccomplishment={accomplishTodo} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
