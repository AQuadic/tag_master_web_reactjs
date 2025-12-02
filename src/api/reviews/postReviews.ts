import { axios } from "@/lib/axios";

export interface CreateReviewPayload {
  reviewable_type: string;
  reviewable_id: string;
  relatable_id?: number;
  relatable_type?: string;
  rating: number;
  comment?: string;
}

export interface CreateReviewResponse {
  status: string;
  message: string;
  data?: any;
}

export async function createReview(
  payload: CreateReviewPayload
): Promise<CreateReviewResponse> {
  const { data } = await axios.post("/review", payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return data;
}
