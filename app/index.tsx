import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

export default function index() {
  return (
    <View className=" flex h-screen  justify-center items-center" >
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text className="text-red-900">
        Open up App.tsx to start working on your app!
      </Text>
      <View>
        <Button title="click me"></Button>
        <Link href={"/Profile"}>go to profile</Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

