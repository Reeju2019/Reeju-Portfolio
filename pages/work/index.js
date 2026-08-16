import Head from "next/head";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { profile, projects } from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const Work = () => {
  const publicProjects = projects.filter(({ repository }) =>
    repository.startsWith("https://github.com/Reeju2019/")
  );

  return (
    <>
      <Head>
        <title>{`Selected Work | ${profile.name}`}</title>
        <meta
          name="description"
          content="Selected public data engineering, applied AI, and full-stack projects by Reeju Bhattacherji."
        />
      </Head>

      <section
        className="relative min-h-full overflow-hidden bg-primary/30 px-4 pb-32 pt-28 sm:px-6 sm:pt-32 lg:pb-24 xl:py-36"
        aria-labelledby="work-title"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl lg:left-auto lg:right-16 lg:translate-x-0"
          aria-hidden="true"
        />

        <div className="container relative z-[1] mx-auto max-w-6xl">
          <motion.header
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-3xl text-center lg:mx-0 lg:mb-12 lg:text-left"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Public repositories
            </span>
            <h1 id="work-title" className="h2">
              Selected work<span className="text-accent">.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:mx-0">
              A focused selection of public projects spanning data platforms,
              applied AI, machine learning, and production-minded web delivery.
            </p>
          </motion.header>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {publicProjects.map((project, index) => (
              <motion.article
                key={project.repository}
                variants={fadeIn("up", 0.25 + index * 0.08)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.07] sm:p-7"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white/80">
                    {project.category}
                  </span>
                  {project.stat && (
                    <span className="text-xs font-medium text-accent">
                      {project.stat}
                    </span>
                  )}
                </div>

                <h2 className="mb-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mb-6 text-sm sm:text-base">{project.description}</p>

                <ul
                  className="mb-7 flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-xs text-white/70"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-lg text-sm font-semibold text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label={`Open ${project.title} source code on GitHub (opens in a new tab)`}
                >
                  <BsGithub className="text-lg" aria-hidden="true" />
                  View source
                  <BsArrowUpRight className="text-sm" aria-hidden="true" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
