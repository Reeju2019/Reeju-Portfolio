import Head from "next/head";
import { motion } from "framer-motion";
import {
  BsArrowUpRight,
  BsAward,
  BsBook,
  BsMortarboard,
  BsPatchCheck,
} from "react-icons/bs";

import { credentials, education, profile } from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const ExternalLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex min-h-[44px] w-fit items-center gap-2 rounded-lg text-sm font-semibold text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    aria-label={`${label} (opens in a new tab)`}
  >
    View evidence
    <BsArrowUpRight aria-hidden="true" />
  </a>
);

const Credentials = () => {
  const certification = credentials.certification;

  return (
    <>
      <Head>
        <title>{`Credentials | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Education, certification, publications, and recognition for ${profile.name}.`}
        />
      </Head>

      <section
        className="relative min-h-full overflow-hidden bg-primary/30 px-4 pb-32 pt-28 sm:px-6 sm:pt-32 lg:pb-24 xl:py-36"
        aria-labelledby="credentials-title"
      >
        <div
          className="pointer-events-none absolute left-1/4 top-12 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
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
              Education and recognition
            </span>
            <h1 id="credentials-title" className="h2">
              Credentials<span className="text-accent">.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:mx-0">
              Current study, certified training, published research, and
              documented recognition supporting the work shown across this site.
            </p>
          </motion.header>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <motion.article
              variants={fadeIn("right", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
              aria-labelledby="education-title"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent">
                  <BsMortarboard aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    {education.status}
                  </span>
                  <h2 id="education-title" className="text-xl font-semibold text-white">
                    Current education
                  </h2>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mb-6 text-sm sm:text-base">
                {education.institution}, {education.location}
              </p>

              <dl className="grid gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Period
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{education.period}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Grade
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{education.grade}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Credits
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{education.credits}</dd>
                </div>
              </dl>

              {education.thesis && (
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Thesis
                  </span>
                  <p className="mt-2 text-sm text-white/75">{education.thesis}</p>
                </div>
              )}
            </motion.article>

            <motion.article
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
              aria-labelledby="certification-title"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent">
                  <BsPatchCheck aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    {certification.year}
                  </span>
                  <h2 id="certification-title" className="text-xl font-semibold text-white">
                    Certification
                  </h2>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {certification.title}
              </h3>
              <p className="mb-4 text-sm text-white/70">{certification.issuer}</p>
              <p className="mb-6 text-sm sm:text-base">{certification.description}</p>
              {certification.url && (
                <div className="mt-auto">
                  <ExternalLink
                    href={certification.url}
                    label={`View ${certification.title} certificate`}
                  />
                </div>
              )}
            </motion.article>
          </div>

          <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-6">
            <motion.section
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              aria-labelledby="publications-title"
            >
              <div className="mb-6 flex items-center gap-3">
                <BsBook className="text-xl text-accent" aria-hidden="true" />
                <h2 id="publications-title" className="text-xl font-semibold text-white">
                  Publications
                </h2>
              </div>
              <ul className="space-y-5">
                {credentials.publications.map((publication) => (
                  <li
                    key={publication.title}
                    className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <h3 className="mb-2 font-semibold leading-relaxed text-white">
                      {publication.title}
                    </h3>
                    <p className="mb-3 text-sm">
                      {publication.publication}, {publication.year}
                    </p>
                    {publication.url && (
                      <ExternalLink
                        href={publication.url}
                        label={`Open ${publication.title}`}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              aria-labelledby="recognition-title"
            >
              <div className="mb-6 flex items-center gap-3">
                <BsAward className="text-xl text-accent" aria-hidden="true" />
                <h2 id="recognition-title" className="text-xl font-semibold text-white">
                  Recognition
                </h2>
              </div>
              <ul className="space-y-5">
                {credentials.recognition.map((item) => (
                  <li
                    key={`${item.title}-${item.year}`}
                    className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-semibold leading-relaxed text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium text-accent">{item.year}</span>
                    </div>
                    <p className="mb-2 text-sm text-white/70">{item.organization}</p>
                    <p className="text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Credentials;
