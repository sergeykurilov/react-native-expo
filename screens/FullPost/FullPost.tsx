import React from "react";
import { View } from "react-native";
import { Loading } from "../../components/Loading";
import { PostImage, PostText } from "./FullPost.styles";
import { FullPostScreenProps } from "../../@types/screens/fullPost";
import { useFetchPost } from "../../hooks/useFetchPost";

export const FullPostScreen = ({ route, navigation }: FullPostScreenProps) => {
  const { id, title } = route.params;
  const { isLoading, item, error } = useFetchPost(id, navigation, title);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: item?.imageUrl,
        }}
      />
      <PostText>{item?.title}</PostText>
    </View>
  );
};
