import Image from "next/image";
import React from "react";
import Bookmark from "../icons/blogs/Bookmark";
import Booked from "../icons/blogs/Booked";

const BookmarksDetails = () => {
  const BlogsSection = [
    {
      image: "/images/home/blogs/bigblog1.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog2.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog3.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog1.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog2.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog3.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog1.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog2.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
    {
      image: "/images/home/blogs/bigblog3.png",
      title: "عنوان المقال",
      time: "5 دقائق",
      description:
        "وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....",
      date: "2,Jan 12:09PM",
    },
  ];
  return (
    <section className="mt-10">
      <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]">
        {BlogsSection.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-full border border-[#B2B2B2] rounded-md bg-[#F6F7FB]"
          >
            <div className="absolute top-4 right-4">
              <Booked />
            </div>
            <Image
              src={item.image}
              alt="big blog image"
              width={387}
              height={212}
              className="w-full"
            />
            <div className="flex items-center justify-between mt-4 px-4">
              <h2 className="text-[#333333] text-[17px] font-bold">
                {item.title}
              </h2>
              <h2 className="text-[#787676] text-base font-normal">
                {item.time}
              </h2>
            </div>
            <p className="text-[#8B8282] text-base mt-3 px-4">
              {item.description}
            </p>
            <p className="text-[#8B8282] text-base mt-3 px-4 justify-end flex">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookmarksDetails;
