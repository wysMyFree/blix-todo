import React from "react";
import { AppLoading } from "expo";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoState } from "./src/context/TodoState";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <TodoState>
      <MainScreen />
    </TodoState>
  );
}
