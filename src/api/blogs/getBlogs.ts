// api/blogs/getBlogs.ts

import { axios } from "@/lib/axios";
import { PostType } from "@/types/blogs";

interface PostsApiResponse {
  data: PostType[];
}

export const getPosts = async (): Promise<PostType[]> => {
  const response = await axios.get<PostsApiResponse>("/posts");
  return response.data.data;
};
