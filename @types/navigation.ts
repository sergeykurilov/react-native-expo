import { RootStackParamList } from "./index";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import React from "react";

export type ScreenComponentType<T extends keyof RootStackParamList> = React.FC<{
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}>;
