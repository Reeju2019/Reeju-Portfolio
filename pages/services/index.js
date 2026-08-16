import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";

import { capabilities, profile } from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const Services = () => {
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
        <title>{`Capabilities | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Demonstrated data engineering, automation, applied AI, and full-stack capabilities from ${profile.name}.`}
        />
      </Head>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_20%_10%,rgba(241,48,36,0.17),transparent_52%)]"
      />

      <section
        aria-labelledby="capabilities-heading"
        className="container mx-auto px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24 lg:pt-36"
      >
        <motion.div {...reveal("up", 0.1)} className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Capabilities
          </p>
          <h1 id="capabilities-heading" className="h2 max-w-4xl">
            From messy operational signals to{" "}
            <span className="text-accent">systems people can trust.</span>
          </h1>
          <p className="max-w-3xl text-base sm:text-lg">
            My work connects data engineering, automation, applied AI, and
            full-stack delivery. Each capability below reflects work already
            demonstrated through professional or public project evidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              {...reveal(index % 2 === 0 ? "right" : "left", 0.14 + index * 0.05)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.14)] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 text-6xl font-bold leading-none text-white/[0.035] transition-colors group-hover:text-accent/[0.08]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {capability.eyebrow}
              </p>
              <h2 className="relative mt-4 max-w-md text-2xl font-semibold text-white sm:text-3xl">
                {capability.title}
              </h2>
              <p className="relative mt-4 max-w-xl">{capability.description}</p>
              <ul
                aria-label={`${capability.title} tools`}
                className="relative mt-7 flex flex-wrap gap-2"
              >
                {capability.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/10">
        <motion.div
          {...reveal("up", 0.12)}
          className="container mx-auto flex flex-col gap-7 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-16"
        >
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              See the evidence
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Explore the public systems behind these capabilities.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View selected work
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Start a conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
