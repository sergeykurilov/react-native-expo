import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenType } from "./index";

type RootStackParamList = {
  Home: undefined;
  FullPost: { id: string; title: string };
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenType.HomeScreen
>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
