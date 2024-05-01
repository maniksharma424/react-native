import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Rootlayout() {
  return (
    // <View style={styles.layout}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Header</Text>
    // </View>
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}

