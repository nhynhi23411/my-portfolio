"use client";
import React from "react";
import { useParams } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blogs";
import Link from "next/link";

export default function BlogDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS[id];

  if (!post) {
    return <div className="py-20 text-center">Post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darkTheme py-20 px-[12%]">
      {/* Nút quay lại */}
      <Link
        href="/#journey"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-10 transition"
      >
        <span className="text-xl">←</span> Back to Journey
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-Ovo leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-400 italic">{post.date}</p>
        </header>

        {/* Nội dung bài viết */}
        <div
          className="prose prose-lg dark:prose-invert font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        <div className="mt-20 border-t pt-10 text-center">
          <p className="text-gray-500">Thank you for reading my journey.</p>
        </div>
      </article>
    </div>
  );
}
