import Link from 'next/link';

import {
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiGithubLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href="https://www.youtube.com" className="hover:text-accent transition-all duration-300">
          <RiYoutubeLine />
      </Link>
      <Link href="https://www.instagram.com" className="hover:text-accent transition-all duration-300">
          <RiInstagramLine />
      </Link>
      <Link href="https://www.twitter.com" className="hover:text-accent transition-all duration-300">
          <RiTwitterLine />
      </Link>
      <Link href="https://www.linkedin.com" className="hover:text-accent transition-all duration-300">
          <RiLinkedinLine />
      </Link>
      <Link href="https://www.github.com/reeju2019" className="hover:text-accent transition-all duration-300">
          <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;