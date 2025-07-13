import Image from "next/image";
import React, { useState } from "react";
import Booked from "../icons/blogs/Booked";
import { useQuery } from "@tanstack/react-query";
import { FavoriteItem, getFavorites } from "@/api/favorite/getAllFav";
import Spinner from "../icons/general/Spinner";
import EmptyState from "../general/EmptyState";
import { removeFromFavorite } from "@/api/favorite/removFromFav";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { PostType } from "@/types/blogs";

const isPostType = (blog: any): blog is PostType => {
  return blog && blog.title !== undefined && blog.image !== undefined;
};

const BookmarksDetails = () => {
  const t = useTranslations("homeblogs");
  const [updating, setUpdating] = useState(false);

  const { data: favorites = [], isLoading, refetch } = useQuery<FavoriteItem[]>({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const blogFavorites = favorites.filter(
    (fav) => fav.favorable_type === "post"
  );

  const handleRemoveFavorite = async (id: number) => {
    try {
      setUpdating(true);
      await removeFromFavorite({ favorable_id: id, favorable_type: "post" });
      toast.success(t('removedFromBookmarks'));
      await refetch();
    } catch {
      toast.error(t('errorRemoving'));
    } finally {
      setUpdating(false);
    }
  };

  if (isLoading || updating) {
    return (
      <div className="flex justify-center my-10">
        <Spinner />
      </div>
    );
  }

  if (blogFavorites.length === 0) {
    return (
      <div>
        <EmptyState />
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]">
        {blogFavorites.map((item, index) => {
          const blog = item.favorable;
          return (
            <div
              key={index}
              className="relative w-full h-full border border-[#B2B2B2] rounded-md bg-[#F6F7FB] pb-4"
            >
              <div className="absolute top-4 right-4">
                <button onClick={() => handleRemoveFavorite(blog.id)}>
                  <Booked />
                </button>
              </div>
              
              {isPostType(blog) && (
                <Image
                  src={blog.image?.url || "/placeholder.jpg"}
                  alt={blog.title}
                  width={387}
                  height={212}
                  className="w-full"
                />
              )}

              {isPostType(blog) && (
                <>
                  <div className="flex items-center justify-between mt-4 px-4">
                    <h2 className="text-[#333333] text-[17px] font-bold">{blog.title}</h2>
                    <h2 className="text-[#787676] text-base font-normal">5 دقائق</h2>
                  </div>
                  <p
                    className="text-[#8B8282] text-base mt-3 px-4 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  <p className="text-[#8B8282] text-base mt-3 px-4 justify-end flex">
                    {new Date(blog.published_at).toLocaleString("ar-EG", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookmarksDetails;
