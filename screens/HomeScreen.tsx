import React from "react";
import { FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { Post } from "../components/Post/Post";
import { Loading } from "../components/Loading";
import { HomeScreenProps } from "../@types/screens/homeScreen";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { Article } from "../@types/article";

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { isLoading, items, error, fetchPosts } = useFetchPosts();

  if (isLoading) {
    return <Loading />;
  }

  const articleItem = ({ item }: { item: Article }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("FullPost", { id: item.id, title: item.title })
      }
    >
      <Post
        title={item.title}
        imageUrl={item.imageUrl}
        createdAt={item.createdAt}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={items}
      renderItem={({ item }) => {
        return (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
            }
            data={items}
            renderItem={articleItem}
            keyExtractor={(item) => item.id.toString()}
          />
        );
      }}
    />
  );
};
