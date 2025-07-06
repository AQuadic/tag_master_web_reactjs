import Image from 'next/image'
import React, { useState } from 'react'
import Bookmark from '../icons/blogs/Bookmark'
import { getPosts } from '@/api/blogs/getBlogs'
import { PostType } from '@/types/blogs'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../icons/general/Spinner'
import Link from 'next/link'
import { removeFromFavorite } from '@/api/favorite/removFromFav'
import { toast } from 'sonner'
import { addToFavorite } from '@/api/favorite/addToFav'
import FilledBookmarkIcon from '../icons/blogs/FilledBookmarkIcon'

const Blogs = ({ post }: { post: PostType })  => {
// const [isFavorite, setIsFavorite] = useState(post.is_favorite);

  const {
    data: posts,
    isLoading,
  } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) return <div className='flex justify-center my-10'>
    <Spinner />
  </div>


// const handleToggleFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault();
//   try {
//     if (isFavorite) {
//       await removeFromFavorite({
//         favorable_id: post.id,
//         favorable_type: "blog",
//       });
//       setIsFavorite(false);
//       toast.success("تمت إزالة المقال من المحفوظات");
//     } else {
//       await addToFavorite({
//         favorable_id: post.id,
//         favorable_type: "blog",
//       });
//       setIsFavorite(true);
//       toast.success("تمت إضافة المقال إلى المحفوظات");
//     }
//   } catch (error: any) {
//     toast.error("حدث خطأ أثناء تحديث المحفوظات");
//     console.error("Toggle favorite error:", error);
//   }
// };


    return (
        <section className='mt-6'>
            <div className='relative'>
                <Image 
                src='/images/blogs/blogImage.png' 
                alt='Blog image' 
                width={1200} 
                height={453} 
                className='object-cover w-full'
            />
                <div className='absolute bottom-4 right-8 md:p-6 text-white'>
                    <h2 className='md:text-5xl text-xl font-bold'>أدوات تعريفية ذكية حديثة</h2>
                    <p className='md:text-2xl text-base font-normal mt-4'>
                        ميداليات وكروت بمظهر أنيق ووظائف ذكية متعددة. <br />
                        تُستخدم في الفعاليات، الأعمال، أو حتى التعريف الشخصي.
                    </p>
                </div>
            </div>

            <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]'>
                {posts?.map((item,index) => (
                    <Link href={`/blog/${item.id}`} key={item.id}>
                    <div
                        key={index}
                        className='relative w-full h-[376px] border border-[#B2B2B2] rounded-md bg-[#F6F7FB]'
                    >
                        <div className='absolute top-4 right-4'>
                            {/* <button onClick={handleToggleFavorite} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow">
                              {isFavorite ? <FilledBookmarkIcon /> : <Bookmark />}
                            </button> */}
                        </div>
                        <Image
                            src={item.image.url}
                            alt={item.title}
                            width={387}
                            height={212}
                            className='w-full'
                        />
                        <div className='flex items-center justify-between mt-4 px-4'>
                            <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                            {/* <h2 className='text-[#787676] text-base font-normal'>5 دقائق</h2> */}
                        </div>
                        <p
                          className='text-[#8B8282] text-base mt-3 px-4 line-clamp-2'
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <p className='text-[#8B8282] text-base mt-3 px-4 justify-end flex'>
                          {new Date(item.published_at).toLocaleString('ar-EG', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </p>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Blogs
