import React from "react";

export default function Publications() {
  const papers = [
    {
      title: "Beyond the pitch deck: How AI is redefining funding predictions",
      authors:
        "Nguyen-Huynh, N. Y., Pham, A., Le, Q. A., Le, M. N., Huynh, Q., & Trinh, V.",
      venue:
        "Journal of Information and Communication Convergence Engineering (JICCE), 24(2), 191–198",
      link: "https://doi.org/10.56977/jicce.2026.24.2.191",
      year: "2026",
    },
    {
      title: "Reasoning startup profiles: Explainability in funding prediction",
      authors: "Nguyen-Huynh, N. Y., Nguyen, Q. H., & Trinh, V.",
      venue: "27th Asia Pacific Management Conference (APMC 2026)",
      link: "#",
      year: "2026",
    },
    {
      title: "Assessing sperm motility through a multi-modal correlation",
      authors:
        "Trinh, V., Nguyen-Huynh, N. Y., Bui-Quang, P., Huynh, Q., & Nguyen-Pham, Q. K.",
      venue:
        "IEEE Symposium on Computers & Informatics (ISCI 2025), Kuala Lumpur, Malaysia",
      link: "https://doi.org/10.1109/ISCI65687.2025.11167457", // [cite: 34]
      year: "2025",
    },
    {
      title:
        "From angel to Series-C: Assessing a start-up's funding opportunities",
      authors:
        "Trinh, V., Pham, A., Le, Q. A., Le, M. N., Nguyen-Huynh, N. Y., & Huynh, Q.",
      venue:
        "International Conference on Future Information & Communication Engineering (ICFICE 2025)",
      link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12293033", // [cite: 37]
      year: "2025",
    },
    {
      title:
        "Revolutionizing ESG reporting: The role of AI in enhancing sustainability transparency",
      authors:
        "Nguyen-Huynh, N. Y., Le, T., Tran, H., Nguyen, G., Nguyen, D., & Le, H. S.",
      venue:
        "Proceedings of the 26th Asia Pacific Management Conference (APMC)",
      link: "#", // Chưa có link DOI cụ thể trong CV [cite: 32]
      year: "2025",
    },
    {
      title: "A proposal of generative AI applications in digital finance",
      authors:
        "Le, H. S., Nguyen-Huynh, N. Y., Anh, N. N. T., Thu, B. N. A., & Thu, L. H. A.",
      venue:
        "Science & Technology Development Journal: Economics - Law & Management",
      link: "https://doi.org/10.32508/stdjelm.v8i3.1366", // [cite: 42]
      year: "2024",
    },
    {
      title:
        "Applying artificial intelligence in data analytics and sustainable development strategies...",
      authors: "Nguyen-Huynh, N. Y., & Le, H. S.",
      venue:
        "Science & Technology Development Journal: Economics - Law & Management",
      link: "https://doi.org/10.32508/stdjelm.v9i1.1530", // [cite: 40]
      year: "2025",
    },
  ];

  return (
    <div id="publications" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Research & Academic</h4>
      <h2 className="text-center text-5xl font-Ovo">Publications</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Selected research papers and conference proceedings in AI, Computer
        Vision, and Fintech.
      </p>

      <div className="grid grid-cols-1 gap-6 my-10 max-w-4xl mx-auto">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 group"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/60 mt-2 italic">
                  {paper.authors}
                </p>
                <p className="text-sm text-gray-600 dark:text-white/80 mt-1">
                  {paper.venue} •{" "}
                  <span className="font-bold">{paper.year}</span>
                </p>
              </div>
              {paper.link !== "#" && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-white/20 shrink-0"
                >
                  <img
                    src="/assets/right-arrow-bold.png"
                    alt="Link"
                    className="w-4 dark:invert"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
