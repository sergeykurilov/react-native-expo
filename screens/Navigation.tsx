import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { FullPostScreen } from "./FullPost/FullPost";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../@types";
import { ScreenType } from "../@types/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenType.HomeScreen}
          component={HomeScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name={ScreenType.FullPost}
          component={FullPostScreen}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
