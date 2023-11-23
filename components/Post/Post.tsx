import React from "react";
import {
  PostDate,
  PostDetails,
  PostImage,
  PostTitle,
  PostView,
} from "./Post.styles";
import { truncateTitle } from "../../utils/strings/truncateTitle";
import { Article } from "../../@types/article";

export const Post = ({ title, imageUrl, createdAt }: Partial<Article>) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title || "")}</PostTitle>
        <PostDate>
          {new Date(createdAt || new Date()).toLocaleDateString()}
        </PostDate>
      </PostDetails>
    </PostView>
  );
};
