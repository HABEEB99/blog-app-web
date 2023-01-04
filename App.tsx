import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
