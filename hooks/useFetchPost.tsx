import React, { useState, useEffect } from "react";
import axios from "axios";
import { Article } from "../@types/article";
import { articleApi } from "../utils/consts/api";
import { NavigationProp } from "@react-navigation/core";
import { RootStackParamList } from "../@types";

export const useFetchPost = (
  id: number,
  navigation: NavigationProp<RootStackParamList>,
  title: string,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState<Article | undefined>();
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${articleApi}/${id}`);
      setItem(response.data);
    } catch (error) {
      setError("Error retrieving the article");
      console.error("Error while retrieving the article", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  React.useEffect(() => {
    navigation.setOptions({ title });
  }, [title, navigation]);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    fetchPost();
  }, []);

  return { isLoading, item, error };
};
