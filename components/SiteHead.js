import Head from "next/head";
import { useRouter } from "next/router";

const siteUrl = "https://reeju2019.github.io/Reeju-Portfolio";
const socialImage = `${siteUrl}/og-portfolio.png`;
const defaultMetadata = {
  title: "Reeju Bhattacherji | Data & Automation",
  description:
    "Data analyst, data engineer, and supply chain automation specialist in Hamburg building scalable analytics, API workflows, and applied AI systems.",
};

const routeMetadata = {
  "/about": {
    title: "About | Reeju Bhattacherji",
    description:
      "Experience, education, and demonstrated data and automation skills for Reeju Bhattacherji.",
  },
  "/services": {
    title: "Capabilities | Reeju Bhattacherji",
    description:
      "Demonstrated data engineering, automation, applied AI, and full-stack capabilities from Reeju Bhattacherji.",
  },
  "/work": {
    title: "Selected Work | Reeju Bhattacherji",
    description:
      "Selected public data engineering, applied AI, and full-stack projects by Reeju Bhattacherji.",
  },
  "/credentials": {
    title: "Credentials | Reeju Bhattacherji",
    description:
      "Education, certification, publications, and recognition for Reeju Bhattacherji.",
  },
  "/contact": {
    title: "Contact | Reeju Bhattacherji",
    description: "Contact Reeju Bhattacherji by email, LinkedIn, or GitHub.",
  },
};

const SiteHead = () => {
  const { asPath, pathname } = useRouter();
  const metadata = routeMetadata[pathname] || defaultMetadata;
  const routePath = asPath.split(/[?#]/)[0];
  const canonicalUrl = routePath === "/" ? siteUrl : `${siteUrl}${routePath}`;

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="theme-color" content="#0b1020" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1731" />
      <meta property="og:image:height" content="909" />
      <meta
        property="og:image:alt"
        content="Abstract data flows and connected nodes on a dark navy background"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={socialImage} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SiteHead;
