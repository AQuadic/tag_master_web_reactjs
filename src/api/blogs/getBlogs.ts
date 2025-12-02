import { axios } from "@/lib/axios";
import { PostType } from "@/types/blogs";

export interface PostsApiResponse {
  data: PostType[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    to: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export const getPosts = async (page: number = 1): Promise<PostsApiResponse> => {
  const response = await axios.get<PostsApiResponse>(`/posts?page=${page}`);
  return response.data;
};
