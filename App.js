import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { initFirebase } from "./src/utils";

LogBox.ignoreAllLogs(true);
export default function Arpp() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
