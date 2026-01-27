import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Phone & Zalo */}
        <a
          href="https://zalo.me/0918214724"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 group"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm dark:bg-darkHover dark:border-white/20">
            <img
              src="/assets/zalo.png"
              alt="Phone"
              className="w-6 dark:invert"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
              Phone / Zalo
            </h3>
            <p className="text-gray-600 dark:text-white/80">0918 214 724</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:nhinhy23411@st.uel.edu.vn"
          className="flex items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 group"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm dark:bg-darkHover dark:border-white/20">
            <img
              src="/assets/email.png"
              alt="Email"
              className="w-6 dark:invert"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
              Email
            </h3>
            <p className="text-gray-600 dark:text-white/80 text-sm">
              nhinhy23411@st.uel.edu.vn
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nhinhy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 group"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm dark:bg-darkHover dark:border-white/20">
            <img src="/assets/link.jpg" alt="LinkedIn" className="w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
              LinkedIn
            </h3>
            <p className="text-gray-600 dark:text-white/80">
              linkedin.com/in/nhinhy
            </p>
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/nhynhiinec/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 border border-gray-300 dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 group"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm dark:bg-darkHover dark:border-white/20">
            <img src="/assets/facebook.png" alt="Facebook" className="w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
              Facebook
            </h3>
            <p className="text-gray-600 dark:text-white/80">
              facebook.com/nhynhiinec
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
