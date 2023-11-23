import { useEffect, useState } from "react";
import { Article } from "../@types/article";
import axios from "axios";
import { articleApi } from "../utils/consts/api";
import { Alert } from "react-native";

export const useFetchPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(articleApi);
      setItems(data);
    } catch (err) {
      setError("Error retrieving articles");
      Alert.alert("Error!", "We can't get articles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { isLoading, items, error, fetchPosts };
};
