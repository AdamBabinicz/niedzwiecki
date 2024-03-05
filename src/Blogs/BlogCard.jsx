import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description, author, date, aosDelay }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        className=" dark:text-white group"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt="..."
            className="mx-auto w-full object-cover md:h-full md:w-[900px] md:object-contain sm:w-full group-hover:scale-105 duration-300"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
          <h2 className="line-clamp-1 text-xl font-semibold">{title}</h2>
          <p className="line-clamp-4 text-gray-500 text-sm dark:text-gray-400">
            {description}
          </p>
          <p className="line-clamp-4 text-gray-500 text-sm dark:text-white">
            {author}
          </p>
          <p className="line-clamp-4 text-gray-500 text-sm dark:text-white">
            {date}
          </p>
          <div className="flex justify-end pr-4 text-gray-500">
            <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
