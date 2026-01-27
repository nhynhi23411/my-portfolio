export const BLOG_POSTS = {
  "my-ai-research-philosophy": {
    title:
      "Beyond the Code: Why I Chose the Path of Interdisciplinary AI Research",
    date: "Jan 27, 2026",
    category: "Research Philosophy",
    icon: "/assets/research.jpg",
    excerpt:
      "From abstract algorithms to tangible societal impact—exploring the transition from a traditional developer mindset to an interdisciplinary researcher.",
    content: `
      <div class="space-y-8 text-lg leading-relaxed text-justify">
        <p class="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          Since I first encountered programming, I have harbored a deep-seated belief that technology possesses the power to reshape our world. However, in the early stages of my journey, that belief remained largely abstract. 
          I found myself diligently mastering algorithms and technical tools, yet a persistent void remained: I struggled to visualize exactly what kind of change technology would bring, and more importantly, for whom it would truly matter.
        </p>

        <section class="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/30 dark:bg-blue-900/10">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Turning Point: Technology in a Societal Context</h3>
          <p>
            As I delved deeper into abstract computational models, my dissatisfaction grew. Raw code alone could not answer my fundamental question: 
            <span class="text-blue-600 dark:text-blue-400 font-semibold italic">"How does technology truly improve people's everyday lives?"</span> 
          </p>
          <p class="mt-4">
            The first major turning point occurred during my studies in <strong>E-commerce</strong>. There, I discovered the vital intersection between technical systems and real-world societal dynamics. I realized that technology does not exist in a vacuum; it is inextricably linked to human behavior, trust, transaction costs, and systemic limitations.
          </p>
        </section>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">AI as a Lens for Reasoning, Not Just a Tool</h3>
        <p>
          The rapid rise of Artificial Intelligence offered a new perspective: AI is not merely a programming challenge, but an extension of human capacity to solve complex, multi-dimensional problems. 
          Admittedly, the journey was far from smooth. Programming was not initially my strongest suit, and I often felt overwhelmed by the mathematical nuances of neural layers.
        </p>
        
        <div class="bg-gray-100 dark:bg-white/5 p-6 rounded-2xl my-8 border border-gray-200 dark:border-white/10 text-center">
          <p class="text-xl font-medium italic text-gray-800 dark:text-gray-200">
            "I overcame this hurdle by mastering AI at a conceptual level—visualizing the flow of information through a system before translating it into code."
          </p>
        </div>

        <p>
          This shift allowed AI to become more than a technical hurdle; <strong>it became a lens through which I could reason about real-world problems.</strong>
        </p>

        <blockquote class="relative p-8 my-12 border-y border-gray-200 dark:border-gray-700">
          <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-darkTheme px-4 text-4xl text-gray-300">“</span>
          <p class="text-2xl font-Ovo text-center italic text-gray-700 dark:text-gray-300">
            I believe that rigorous research is the essential foundation for bridging the gap between frontier technology and tangible societal needs.
          </p>
        </blockquote>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Why Research Over Repetition?</h3>
        <p>
          Drawing on my background in business and interdisciplinary thinking, I began integrating AI into diverse domains—from <strong>Biomedical Imaging</strong> and <strong>ESG reporting</strong> to <strong>Legal-tech</strong>. 
          I chose the path of a Research Associate because it allows me to engage with the <span class="underline decoration-blue-500 decoration-2 underline-offset-4">"Why" before the "How."</span>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <div class="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
            <h4 class="font-bold text-blue-600 mb-2">Deep Inquiry</h4>
            <p class="text-sm">Understanding the root causes of systemic inefficiencies.</p>
          </div>
          <div class="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
            <h4 class="font-bold text-blue-600 mb-2">Adaptive Iteration</h4>
            <p class="text-sm">Refining AI solutions that behave reliably in unpredictable environments.</p>
          </div>
          <div class="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
            <h4 class="font-bold text-blue-600 mb-2">Trust-Centric</h4>
            <p class="text-sm">Fostering human trust in high-stakes financial and medical decisions.</p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Five-Year Trajectory</h3>
        <p>
          My goal is to spend the next five years at the frontier of AI application, specifically in financial challenges. I view research not as a purely academic exercise, but as a timely pathway toward building AI systems with real-world applicability. 
          Whether it is improving risk management or enhancing transactional efficiency, my commitment remains the same: <strong>Technology must serve a purpose beyond the screen.</strong>
        </p>
      </div>
    `,
  },
  "the-black-box-dilemma": {
    title: "The Black Box Dilemma: Why 'Accuracy' is Never Enough in AI",
    date: "Jan 28, 2026",
    category: "Explainable AI (XAI)",
    icon: "/assets/xai-blog.jpg", // Bạn hãy thêm ảnh xai-blog.jpg vào assets
    excerpt:
      "Exploring the critical need for transparency in AI. Why understanding the 'Why' behind a decision is the bridge to human trust.",
    content: `
      <div class="space-y-8 text-lg leading-relaxed text-justify font-Ovo">
        <p class="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-red-600">
          In the world of Artificial Intelligence, we are often obsessed with numbers. A 99% accuracy rate is hailed as a victory, a state-of-the-art model is celebrated for its precision. 
          But as I delved deeper into AI applications for high-stakes domains like <strong>Fintech</strong> and <strong>Biomedical Vision</strong>, a haunting question remained: 
          <em>If we don't know how the AI arrived at its conclusion, can we truly trust it with a human life or a multi-million dollar investment?</em>
        </p>

        <section class="my-12 py-8 px-6 bg-gray-50 dark:bg-white/5 rounded-3xl border-l-8 border-red-500">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">The 'Black Box' Crisis</h3>
          <p>
            Standard Deep Learning models often function as "Black Boxes." We feed in data, and they output a prediction. The internal logic—the millions of neurons firing in complex patterns—remains hidden from human eyes. 
            In my research on <strong>Startup Funding Prediction (AFAS)</strong>, I realized that a founder doesn't just want to hear "No" from an AI; they need to know <em>which</em> specific factor led to that result.
          </p>
        </section>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">XAI: Beyond Predictive Power</h3>
        <p>
          Explainable AI (XAI) is the answer to this dilemma. It is the bridge between <strong>machine intelligence</strong> and <strong>human intuition</strong>. 
          By utilizing techniques like <strong>SHAP</strong> or <strong>Pixel-wise Encoding</strong>, we can peel back the layers of the black box. 
          It transforms a silent prediction into a transparent narrative.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div class="p-6 border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent shadow-sm">
            <h4 class="font-bold text-red-600 mb-2">The Risks of Opacity</h4>
            <ul class="text-sm space-y-2 list-disc ml-4">
              <li>Hidden biases in training data leading to unfair financial screening.</li>
              <li>Clinical misdiagnosis due to a model focusing on 'noise' rather than pathology.</li>
              <li>A lack of accountability when AI-driven decisions fail.</li>
            </ul>
          </div>
          <div class="p-6 border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent shadow-sm">
            <h4 class="font-bold text-green-600 mb-2">The Rewards of Transparency</h4>
            <ul class="text-sm space-y-2 list-disc ml-4">
              <li>Building <strong>Human-in-the-loop</strong> systems that empower experts.</li>
              <li>Ensuring regulatory compliance (GDPR/ESG standards).</li>
              <li>Faster debugging and more robust model iteration.</li>
            </ul>
          </div>
        </div>

        <blockquote class="relative p-10 my-16 bg-red-50/50 dark:bg-red-900/10 rounded-full text-center italic border border-red-100 dark:border-red-900/30">
          <p class="text-2xl text-gray-800 dark:text-gray-200">
            "Trust is not built on accuracy alone; it is forged through understanding."
          </p>
        </blockquote>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">A Multi-Domain Mandate</h3>
        <p>
          Throughout my journey, whether I am analyzing <strong>sperm motility (SARM)</strong> or <strong>Fintech funding rounds</strong>, XAI has become my non-negotiable standard. 
          In medicine, a doctor needs to see the "Heatmap" of where the AI is looking. In finance, an analyst needs to see the feature importance plot. 
          This is where my <strong>interdisciplinary mindset</strong> truly shines—merging technical rigor with the absolute necessity for human-auditable logic.
        </p>

        <p class="mt-8 border-t border-gray-100 dark:border-white/10 pt-8">
          The future of AI isn't just about making smarter machines; it's about making machines that can explain themselves to us. 
          That is the path I have chosen, and that is the research I will continue to pursue.
        </p>
      </div>
    `,
  },
  "data-over-emotion": {
    title: "Data Speaks Louder Than Emotion: Navigating Collaborative Research",
    date: "Jan 27, 2026",
    category: "Professional Mindset",
    icon: "/assets/collaboration.jpg",
    excerpt:
      "In high-stakes research, personal ego often clouds judgment. Why staying calm and letting data drive the conversation is the key to collective success.",
    content: `
      <div class="space-y-8 text-lg leading-relaxed text-justify font-Ovo">
        <p class="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-blue-700">
          Working in a research group—whether at the Business Analytics & AI Lab or during complex interdisciplinary projects—is a masterclass in diplomacy. 
          In an environment driven by innovation, it is natural for brilliant minds to have strong opinions. However, there is a common pitfall that can stall even the most promising projects: letting personal emotions outweigh objective facts.
        </p>

        <section class="my-12 py-8 px-6 bg-blue-50/30 dark:bg-white/5 rounded-3xl border-l-8 border-blue-700">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Calm Researcher’s Creed</h3>
          <p>
            Emotions are subjective, reactive, and often biased. In contrast, data is cold, hard, and—when analyzed correctly—honest. 
            When a disagreement arises in a working group, the most effective tool is not the loudest voice, but the clearest spreadsheet. 
            I have learned that staying <strong>calm</strong> is not about suppressing passion; it is about channeling that passion into rigorous verification.
          </p>
        </section>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Data Must Lead</h3>
        <p>
          In my journey as a Research Assistant, I've seen how "gut feelings" can lead a team astray. Whether we are scraping Tiki.vn for sentiment analysis or building models for sperm motility, the data doesn't care about our ego. 
          It only cares about the truth.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div class="p-6 border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent shadow-sm">
            <h4 class="font-bold text-blue-700 mb-2">Emotion-Driven Conflict</h4>
            <ul class="text-sm space-y-2 list-disc ml-4">
              <li>Defense of personal ideas regardless of performance.</li>
              <li>Subjective biases clouding the evaluation of project goals.</li>
              <li>Breakdown in communication due to "personalizing" technical feedback.</li>
            </ul>
          </div>
          <div class="p-6 border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-transparent shadow-sm">
            <h4 class="font-bold text-green-700 mb-2">Data-Driven Solutions</h4>
            <ul class="text-sm space-y-2 list-disc ml-4">
              <li>Objectively comparing model metrics (Recall, Precision, F1-Score).</li>
              <li>Using bibliometric analysis to ground theoretical arguments.</li>
              <li>Fostering a culture of "Evidence over Ego."</li>
            </ul>
          </div>
        </div>

        <blockquote class="relative p-10 my-16 bg-blue-50/50 dark:bg-blue-900/10 rounded-full text-center italic border border-blue-100 dark:border-blue-900/30">
          <p class="text-2xl text-gray-800 dark:text-gray-200 font-Ovo">
            "A successful team is not one that never disagrees, but one that uses data as the final arbiter of every conflict."
          </p>
        </blockquote>

        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Bridging the Gap</h3>
        <p>
          As an <strong>Interdisciplinary AI Engineer</strong>, my role is often to translate complex technical data into business insights. 
          This requires a level-headed approach. If the sentiment analysis from a scraping project shows a negative trend, it isn't a failure of the team—it is a signal for a strategy pivot. 
          By letting the data speak, we remove the "blame culture" and replace it with a "learning culture."
        </p>

        <p class="mt-8 border-t border-gray-100 dark:border-white/10 pt-8">
          The next time you find yourself in a heated discussion, take a breath, open the dataset, and ask: <em>"What does the evidence say?"</em> 
          In the modern era of AI and big data, being the calmest person in the room—and the one with the most reliable data—is your greatest competitive advantage.
        </p>
      </div>
    `,
  },
};
