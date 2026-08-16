import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";

import {
  education,
  experience,
  impactMetrics,
  profile,
  skillGroups,
} from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const About = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (direction, delay) => ({
    variants: fadeIn(direction, reduceMotion ? 0 : delay),
    initial: reduceMotion ? false : "hidden",
    animate: "show",
    exit: reduceMotion ? undefined : "hidden",
  });

  return (
    <div className="relative isolate bg-primary/30">
      <Head>
        <title>{`About | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Experience, education, and demonstrated data and automation skills for ${profile.name}.`}
        />
      </Head>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,rgba(241,48,36,0.16),transparent_58%)]"
      />

      <section
        aria-labelledby="about-heading"
        className="container mx-auto px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-36"
      >
        <motion.div {...reveal("up", 0.1)} className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            About
          </p>
          <h1 id="about-heading" className="h2 max-w-4xl">
            Turning complex operational data into{" "}
            <span className="text-accent">clear, reliable systems.</span>
          </h1>
          <p className="max-w-3xl text-base sm:text-lg">{profile.summary}</p>
        </motion.div>

        <ul
          aria-label="Confirmed professional impact"
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {impactMetrics.map((metric, index) => (
            <motion.li
              key={metric.label}
              {...reveal("up", 0.15 + index * 0.05)}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm"
            >
              <p className="text-3xl font-semibold leading-none text-accent sm:text-4xl">
                {metric.value}
              </p>
              <h2 className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {metric.label}
              </h2>
              <p className="mt-2 text-sm leading-6">{metric.detail}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="border-y border-white/10 bg-black/10"
      >
        <div className="container mx-auto grid gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-14 lg:py-24">
          <motion.div {...reveal("right", 0.1)}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Professional path
            </p>
            <h2 id="experience-heading" className="text-3xl font-semibold sm:text-4xl">
              Experience across data, automation, and application delivery.
            </h2>
            <p className="mt-5 max-w-xl">
              The common thread is translating business and system needs into
              practical workflows that teams can understand, run, and improve.
            </p>
          </motion.div>

          <ol className="space-y-6">
            {experience.map((item, index) => (
              <motion.li
                key={`${item.organization}-${item.role}`}
                {...reveal("left", 0.12 + index * 0.05)}
              >
                <article className="relative rounded-2xl border border-white/10 bg-primary/70 p-5 sm:p-7">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-7 h-10 w-1 rounded-r-full bg-accent"
                  />
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-medium text-white/80">
                        {item.organization} · {item.location}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-white/60 sm:text-right">
                      <span className="block text-white/80">{item.period}</span>
                      {item.type}
                    </p>
                  </header>

                  <p className="mt-5">{item.summary}</p>

                  <ul className="mt-5 space-y-3" aria-label={`${item.role} highlights`}>
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-white/70 sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-label={`${item.role} technologies`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {item.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="education-heading"
        className="container mx-auto grid gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12 lg:py-24"
      >
        <motion.article
          {...reveal("right", 0.1)}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Current education
          </p>
          <h2 id="education-heading" className="text-2xl font-semibold sm:text-3xl">
            {education.degree}
          </h2>
          <p className="mt-3 font-medium text-white/80">
            {education.institution}
          </p>
          <p className="mt-1 text-sm">
            {education.location} · {education.period}
          </p>

          <dl className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-xl bg-black/15 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Status
              </dt>
              <dd className="mt-2 text-sm font-medium text-white">
                {education.status}
              </dd>
            </div>
            <div className="rounded-xl bg-black/15 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Current grade
              </dt>
              <dd className="mt-2 text-sm font-medium text-white">
                {education.grade}
              </dd>
            </div>
            <div className="rounded-xl bg-black/15 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Progress
              </dt>
              <dd className="mt-2 text-sm font-medium text-white">
                {education.credits}
              </dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">
              Master&apos;s thesis
            </p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              {education.thesis}
            </p>
          </div>
        </motion.article>

        <motion.div {...reveal("left", 0.18)}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Selected toolkit
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Focused on the tools behind the work.
          </h2>
          <p className="mt-4 max-w-2xl">
            A curated view of demonstrated technologies, grouped by how they
            contribute to a working system rather than by self-rated scores.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const headingId = `skill-${group.title.replace(/\s+/g, "-")}`;

              return (
                <section
                  key={group.title}
                  aria-labelledby={headingId}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 id={headingId} className="font-semibold capitalize text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-black/20 px-3 py-1.5 text-xs text-white/70"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
