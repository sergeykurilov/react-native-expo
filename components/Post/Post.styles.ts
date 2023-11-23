import styled from "styled-components/native";

export const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

export const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
