export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Statistics & Financial Mathematics · UCSB
        </p>

        <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
          Maahir Shaheed
        </h1>

        <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
          Building AI tools for financial research, market data, and uncertainty.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m a Statistics & Financial Mathematics student at UC Santa Barbara.
          I’m focused on machine learning, Bayesian methods, financial data systems,
          and cloud-based analytics.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            View Projects
          </a>

          <a
            href="#writing"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-900"
          >
            Read Writing
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold">Featured Work</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Projects that connect statistics, financial mathematics, AI, and data engineering.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="https://github.com/MaahirShaheed/Bayesian-hidden-market-data-pipeline"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Research Project</p>
            <h3 className="text-xl font-bold">Bayesian Hidden Market Data Pipeline</h3>
            <p className="mt-4 text-slate-300">
              Independent research project using Bayesian thinking to understand hidden
              market regimes, missing information, and uncertainty in financial data.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              View GitHub →
            </p>
          </a>

          <a
            href="https://github.com/MaahirShaheed/aapl-market-regime-ai-dashboard"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Dashboard</p>
            <h3 className="text-xl font-bold">AAPL Market Regime Dashboard</h3>
            <p className="mt-4 text-slate-300">
              Streamlit dashboard tracking AAPL, SPY, RSI, returns, volatility,
              and relative market strength.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              View GitHub →
            </p>
          </a>

          <a
            href="https://github.com/MaahirShaheed/Stock-sql-ai-pipeline"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Data Pipeline</p>
            <h3 className="text-xl font-bold">Stock SQL AI Pipeline</h3>
            <p className="mt-4 text-slate-300">
              Python and SQL pipeline for organizing market data and building
              machine learning baselines.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              View GitHub →
            </p>
          </a>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Research
        </p>

        <h2 className="text-4xl font-bold">Bayesian AI for Market Data</h2>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            My current research explores how Bayesian networks can help model
            financial markets when data is incomplete, noisy, or hiding deeper structure.
            Instead of only predicting whether a stock moves up or down, the goal is
            to reason about uncertainty and hidden market regimes.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Focus</p>
              <p className="mt-2 font-semibold text-white">Missing Data</p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Modeling</p>
              <p className="mt-2 font-semibold text-white">Hidden Regimes</p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Application</p>
              <p className="mt-2 font-semibold text-white">Financial Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Writing
        </p>

        <h2 className="text-4xl font-bold">Medium Articles</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          I write about financial mathematics, numerical analysis, Bayesian thinking,
          AI, and how technical ideas connect to real-world market research.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="https://medium.com/@maahir9420"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Medium Article</p>
            <h3 className="text-xl font-bold">
              How Numerical Analysis Connects to Financial Math and Data Science
            </h3>
            <p className="mt-4 text-slate-300">
              A reflection on how approximation, numerical methods, and uncertainty
              show up in finance, data science, and AI.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              Read on Medium →
            </p>
          </a>

          <a
            href="https://medium.com/@maahir9420"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Medium Article</p>
            <h3 className="text-xl font-bold">
              What I Learned About Quant Finance From Binomial Trees
            </h3>
            <p className="mt-4 text-slate-300">
              Breaking down how a simple up-or-down stock movement becomes the foundation
              for option pricing and risk-neutral thinking.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              Read on Medium →
            </p>
          </a>

          <a
            href="https://medium.com/@maahir9420"
            target="_blank"
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
          >
            <p className="mb-3 text-sm font-semibold text-blue-400">Medium Profile</p>
            <h3 className="text-xl font-bold">More Writing</h3>
            <p className="mt-4 text-slate-300">
              Read more of my posts on AI, statistics, financial mathematics,
              and research projects.
            </p>
            <p className="mt-5 text-sm font-semibold text-blue-400">
              View Medium →
            </p>
          </a>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Certification
        </p>

        <h2 className="text-4xl font-bold">AWS Certified Cloud Practitioner</h2>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Earned the AWS Certified Cloud Practitioner certification, demonstrating
            foundational knowledge of cloud concepts, AWS core services, security,
            architecture, pricing, and cloud value.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="text-4xl font-bold">Technical Stack</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Python",
            "R",
            "SQL",
            "C++",
            "Machine Learning",
            "Bayesian Networks",
            "Financial Mathematics",
            "AWS Certified Cloud Practitioner",
            "Next.js",
            "Vercel",
            "Streamlit",
            "GitHub",
            "Data Visualization",
            "Statistical Modeling",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold">Let’s connect.</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            I’m interested in data science, AI, financial research, and cloud analytics roles.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/MaahirShaheed?tab=repositories"
              target="_blank"
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/maahir-shaheed/"
              target="_blank"
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              LinkedIn
            </a>

            <a
              href="https://medium.com/@maahir9420"
              target="_blank"
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              Medium
            </a>

            <a
              href="mailto:maahir9420@gmail.com"
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}