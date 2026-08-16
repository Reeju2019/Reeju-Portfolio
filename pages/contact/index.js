import Head from "next/head";
import { motion } from "framer-motion";
import {
  BsArrowUpRight,
  BsEnvelope,
  BsGeoAlt,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

import { profile, socialLinks } from "../../data/portfolioData";
import { fadeIn } from "../../variants";

const socialIcons = {
  GitHub: BsGithub,
  LinkedIn: BsLinkedin,
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>{`Contact | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Contact ${profile.name} by email, LinkedIn, or GitHub.`}
        />
      </Head>

      <section
        className="relative min-h-full overflow-hidden bg-primary/30 px-4 pb-32 pt-28 sm:px-6 sm:pt-32 lg:pb-24 xl:py-36"
        aria-labelledby="contact-title"
      >
        <div
          className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative z-[1] mx-auto max-w-5xl">
          <motion.header
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-3xl text-center lg:mb-12"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Contact
            </span>
            <h1 id="contact-title" className="h2">
              Let&apos;s connect<span className="text-accent">.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base">
              For opportunities or technical conversations in data, automation,
              and applied AI, start with email or use a professional profile.
            </p>
          </motion.header>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
            <motion.article
              variants={fadeIn("right", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:p-10"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-2xl text-accent">
                <BsEnvelope aria-hidden="true" />
              </span>
              <h2 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
                Send an email
              </h2>
              <p className="mb-7 max-w-xl text-sm sm:text-base">
                Email is the most direct way to share role details, project
                context, or a collaboration idea.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d82a20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"
              >
                Email {profile.name.split(" ")[0]}
                <BsArrowUpRight aria-hidden="true" />
              </a>
              <p className="mt-5 break-all text-sm text-white/70">
                {profile.email}
              </p>
            </motion.article>

            <motion.aside
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-5"
              aria-label="Contact details"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <BsGeoAlt className="text-xl text-accent" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-white">Location</h2>
                </div>
                <address className="not-italic text-sm text-white/70 sm:text-base">
                  {profile.location}
                </address>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Professional profiles
                </h2>
                <ul className="space-y-2">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.name] || BsArrowUpRight;

                    return (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex min-h-[48px] items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          aria-label={`${link.label} (opens in a new tab)`}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="text-lg text-accent" aria-hidden="true" />
                            {link.name}
                          </span>
                          <BsArrowUpRight
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
