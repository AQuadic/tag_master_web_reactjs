import { getPostById } from "@/api/blogs/getSingleBlog";
import { PostType } from "@/types/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetails = async ({ params }: Props) => {
  const post: PostType = await getPostById(params.slug);

  if (!post) return notFound();

  return (
    <section className="container py-10">
      <h1 className="text-[#000000] text-2xl font-semibold">{post.title}</h1>

      {post.image?.url && (
        <Image
          src={post.image.url}
          alt={post.title}
          width={1200}
          height={524}
          className="mt-7"
        />
      )}

      <div
        className="text-[#000000] mt-6 text-xl leading-8 "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <p className="mt-6 text-sm text-[#666]">
        {new Date(post.published_at).toLocaleString("ar-EG")}
      </p>
    </section>
  );
};

export default BlogDetails;
