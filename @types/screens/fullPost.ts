import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../index";

type FullPostScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FullPost"
>;
type FullPostScreenRouteProp = RouteProp<RootStackParamList, "FullPost">;

export interface FullPostScreenProps {
  navigation: FullPostScreenNavigationProp;
  route: FullPostScreenRouteProp;
}
