"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '@/types/blogs'
import Bookmark from '../icons/blogs/Bookmark'
import FilledBookmarkIcon from '../icons/blogs/FilledBookmarkIcon'
import { addToFavorite } from '@/api/favorite/addToFav'
import { removeFromFavorite } from '@/api/favorite/removFromFav'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl';

const BlogCard = ({ post }: { post: PostType }) => {
  const t = useTranslations("homeblogs");
  const [isFavorite, setIsFavorite] = useState(post.is_favorite)

  const handleToggleFavorite = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    try {
      if (isFavorite) {
        await removeFromFavorite({
          favorable_id: post.id,
          favorable_type: "post", 
        })
        setIsFavorite(false)
        toast.success(t('removedFromBookmarks'))
      } else {
        await addToFavorite({
          favorable_id: post.id,
          favorable_type: "post",
        })
        setIsFavorite(true)
        toast.success(t('addedToBookmarks'))
      }
    } catch {
      toast.error("Error toggling bookmarks")
    }
  }

  return (
    <Link href={`/blog/${post.id}`}>
      <div className='relative w-full h-[376px] border border-[#B2B2B2] rounded-md bg-[#F6F7FB]'>
        <button
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 z-10 p-2"
        >
          {isFavorite ? <FilledBookmarkIcon /> : <Bookmark />}
        </button>

        <Image
          src={post.image.url}
          alt={post.title}
          width={387}
          height={212}
          className='md:w-[387px] w-full h-[212px] object-cover'
        />

        <div className='flex items-center justify-between mt-4 px-4'>
          <h2 className='text-[#333333] text-[17px] font-bold'>{post.title}</h2>
        </div>

        <p
          className='text-[#8B8282] text-base mt-3 px-4 line-clamp-2'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <p className='text-[#8B8282] text-base mt-3 px-4 justify-end flex'>
          {new Date(post.published_at).toLocaleString('ar-EG', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })}
        </p>
      </div>
    </Link>
  )
}

export default BlogCard
