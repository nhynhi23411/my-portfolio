import React from "react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Ảnh cá nhân */}
      <img
        src="/assets/canhan1.jpg"
        alt="Nhi-Yen Nguyen-Huynh"
        className="rounded-full w-32 shadow-sm"
      />

      <h3 className="text-xl md:text-2xl mb-2 font-Ovo text-gray-700 dark:text-white/90">
        Nhi-Yen Nguyen-Huynh
      </h3>

      {/* Headline nhấn mạnh vai trò song hành và tính liên ngành */}
      <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
        AI Engineer <br /> & Research Associate
      </h1>

      {/* Mô tả nhấn mạnh tư duy đa lĩnh vực (Cross-domain) */}
      <p className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
        Specializing in bridging technical algorithms with real-world
        engineering challenges. I leverage a cross-domain mindset to build,
        test, and iterate adaptive AI solutions, translating complex data into
        practical, high-impact systems that serve diverse industries.
      </p>

      {/* Địa chỉ nhỏ gọn, tinh tế */}
      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/50 mt-1">
        Ho Chi Minh City, Vietnam
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Contact me
          <img
            src="/assets/right-arrow-white.png"
            alt=""
            className="w-3 dark:invert"
          />
        </a>

        <a
          href="/assets/NguyenHuynhYenNhi_CV_AI_Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-gray-50 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white transition duration-300"
        >
          Curriculum Vitae
          <img
            src="/assets/download-icon.png"
            alt=""
            className="w-3 dark:invert"
          />
        </a>
      </div>
    </div>
  );
}
