import React from "react";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* Sử dụng Text Logo thay vì ảnh để đồng bộ với Navbar */}
        <a href="#top" className="inline-block mb-2">
          <h1 className="text-3xl font-bold font-Ovo text-gray-800 dark:text-white">
            Nhi-Yen Nguyen Huynh<span className="text-red-500">.</span>
          </h1>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          {/* Icon mail giữ nguyên theo file assets của bạn */}
          <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
          <img
            src="/assets/mail_icon_dark.png"
            alt=""
            className="w-5 hidden dark:block"
          />

          {/* Cập nhật email theo CV */}
          <a
            href="mailto:nhinhy23411@st.uel.edu.vn"
            className="hover:text-red-500 duration-300"
          >
            nhinhy23411@st.uel.edu.vn
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        {/* Cập nhật bản quyền tên bạn */}
        <p>
          © {new Date().getFullYear()} Nhi-Yen Nguyen-Huynh. All rights
          reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nhinhy/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/nhynhiinec/"
            >
              Facebook
            </a>
          </li>
          {/* Nếu bạn có GitHub, có thể thêm dòng dưới đây */}
          {/* <li><a target='_blank' rel="noopener noreferrer" href="https://github.com/yourusername">GitHub</a></li> */}
        </ul>
      </div>
    </div>
  );
}
