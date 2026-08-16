import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineMapPin } from "react-icons/hi2";

import { education, impactMetrics, profile } from "../data/portfolioData";
import { fadeIn } from "../variants";

const Home = () => (
  <section className="page-section page-section-top" aria-labelledby="home-title">
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-3xl"
      >
        <p className="eyebrow">
          <HiOutlineMapPin aria-hidden="true" />
          {profile.location}
        </p>
        <h1 id="home-title" className="display-title">
          Data that explains.
          <span> Automation that moves.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base text-white/70 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/work" className="button-primary">
            Explore selected work
            <HiArrowRight aria-hidden="true" />
          </Link>
          <Link href="/about" className="button-secondary">
            See experience
          </Link>
        </div>
      </motion.div>

      <motion.aside
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="data-panel"
        aria-label="Professional impact summary"
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Current focus
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
              {profile.role}
            </h2>
          </div>
          <span className="mt-1 inline-flex items-center gap-2 whitespace-nowrap text-xs text-white/50">
            <span className="status-dot" aria-hidden="true" />
            Hamburg
          </span>
        </div>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">
                {metric.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white">
                {metric.value}
              </dd>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                {metric.detail}
              </p>
            </div>
          ))}
        </dl>

        <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
          {education.degree} candidate / current grade {education.grade.split(" ·")[0]}
        </p>
      </motion.aside>
    </div>
  </section>
);

export default Home;
