import {axios} from "@/lib/axios";
import { PostType } from "@/types/blogs";

export const getPostById = async (id: string): Promise<PostType> => {
  const res = await axios.get(`/posts/${id}`);
  return res.data.data;
};