import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

const links = [
  {
    label: "Email Reeju",
    href: "mailto:reeju.gr@gmail.com",
    icon: RiMailLine,
  },
  {
    label: "Reeju on LinkedIn (opens in a new tab)",
    href: "https://www.linkedin.com/in/reeju-bhattacherji/",
    icon: RiLinkedinLine,
    external: true,
  },
  {
    label: "Reeju on GitHub (opens in a new tab)",
    href: "https://github.com/Reeju2019",
    icon: RiGithubLine,
    external: true,
  },
];

const Socials = () => (
  <div
    className="flex items-center gap-1 sm:gap-2"
    role="group"
    aria-label="Contact links"
  >
    {links.map(({ label, href, icon: Icon, external }) => (
      <a
        key={href}
        href={href}
        aria-label={label}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-xl text-white/70 transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Icon aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default Socials;
