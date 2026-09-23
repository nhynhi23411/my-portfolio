import React from "react";
import Link from "next/link";

export default function Journey() {
  // 1. Danh sách các bài Blog cập nhật bài viết về Research Philosophy
  const posts = [
    {
      title: "Beyond the Code: Why I Chose Research",
      id: "my-ai-research-philosophy",
      icon: "/assets/research.jpg", // Đảm bảo bạn có ảnh này trong public/assets
      category: "Research Philosophy",
      date: "Jan 2026",
      excerpt:
        "Reflecting on the transition from abstract algorithms to tangible impact, and why I thrive in the uncertainty of research.",
    },
    {
      title: "The Black Box Dilemma",
      id: "the-black-box-dilemma",
      icon: "/assets/ai.jpg", // Đảm bảo bạn đã có ảnh này trong assets
      category: "Explainable AI",
      date: "Jan 2026",
      excerpt:
        "Why 'Accuracy' is never enough in AI. Exploring the critical need for transparency and human trust in high-stakes decision making.",
    },
    {
      title: "Data Speaks Louder Than Emotion",
      id: "data-over-emotion",
      icon: "/assets/collaboration.jpg",
      category: "Teamwork",
      date: "Jan 2026",
      excerpt:
        "How to navigate collaborative research by prioritizing objective evidence over personal ego to build a learning-driven culture.",
    },
  ];

  // 2. Danh sách Báo chí & Truyền hình đầy đủ các link bạn cung cấp
  const mediaLinks = [
    {
      title: "Học sinh sáng chế phần mềm đảm bảo an toàn trên không gian mạng",
      publisher: "Báo Thanh Niên",
      url: "https://thanhnien.vn/hoc-sinh-sang-che-phan-mem-dam-bao-an-toan-tren-khong-gian-mang-1851518777.htm",
      type: "News",
    },
    {
      title:
        "Kiềng ba chân tạo nền tảng phát triển cho Trường ĐH Kinh tế - Luật",
      publisher: "Báo Pháp Luật (PLO)",
      url: "https://plo.vn/kieng-ba-chan-tao-nen-tang-phat-trien-cho-truong-dai-hoc-kinh-te-luat-post892077.html",
      type: "News",
    },
    {
      title: "Đặc cách sinh viên xuất sắc",
      publisher: "Báo Sài Gòn Giải Phóng, 18/9/2026",
      url: "https://www.sggp.org.vn/bao-sai-gon-giai-phong-ngay-18092026-post872135.html",
      type: "News",
    },
  ];

  return (
    <div id="journey" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-lg font-Ovo text-gray-500 mb-2 tracking-wide">
          Personal Stories
        </h4>
        <h2 className="text-center text-5xl font-Ovo font-bold">
          The Research Journey
        </h2>
      </div>

      {/* --- PHẦN 1: BLOG POSTS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.id}`} key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-full border border-gray-200 dark:border-white/10 flex flex-col bg-white dark:bg-darkHover">
              <div
                className="aspect-video bg-cover bg-center duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.icon})` }}
              ></div>
              <div className="p-6">
                <span className="text-[10px] text-blue-600 font-bold uppercase">
                  {post.category} — {post.date}
                </span>
                <h3 className="font-bold text-xl mt-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- PHẦN 2: MEDIA & PRESS --- */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold font-Ovo mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-black dark:bg-white"></span>
          Featured In & Media
        </h3>

        <div className="space-y-4">
          {mediaLinks.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span
                  className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase w-fit ${
                    item.type === "Video"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.type}
                </span>
                <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition">
                  {item.title}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden md:block text-xs text-gray-400 italic">
                  {item.publisher}
                </span>
                <img
                  src="/assets/right-arrow-bold.png"
                  className="w-3 -rotate-45 opacity-30 group-hover:opacity-100 transition dark:invert"
                  alt="link"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
