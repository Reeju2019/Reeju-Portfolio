import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiAcademicCap,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

export const navData = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "About", path: "/about", icon: HiUser },
  { name: "Capabilities", path: "/services", icon: HiRectangleGroup },
  { name: "Work", path: "/work", icon: HiViewColumns },
  { name: "Credentials", path: "/credentials", icon: HiAcademicCap },
  { name: "Contact", path: "/contact", icon: HiEnvelope },
];

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b1020]/90 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl xl:inset-x-auto xl:bottom-auto xl:right-5 xl:top-1/2 xl:-translate-y-1/2 xl:rounded-full xl:border xl:p-2"
      aria-label="Primary navigation"
    >
      <ul className="mx-auto flex max-w-md items-center justify-between gap-1 xl:flex-col">
        {navData.map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;

          return (
            <li key={path} className="relative group">
              <Link
                href={path}
                aria-label={name}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-12 sm:w-12 ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon aria-hidden="true" />
              </Link>
              <span
                className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-primary opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 xl:block"
                aria-hidden="true"
              >
                {name}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
