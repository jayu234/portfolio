import Link from "next/link";

import { RiLinkedinBoxLine, RiGithubLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri"
import { SiCodechef } from "react-icons/si"
import { TbBrandLeetcode } from "react-icons/tb"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5">
      <a href={'https://www.linkedin.com/in/jaivik-goswami'} target="_blank" rel="noopener noreferrer" className="hover:text-accent sm:text-2xl text-xl transition-all duration-300">
        <RiLinkedinBoxLine />
      </a>
      <a href={'https://github.com/jayu234'} target="_blank" rel="noopener noreferrer" className="hover:text-accent sm:text-2xl text-xl transition-all duration-300">
        <RiGithubLine />
      </a>
      <a href={'https://www.leetcode.com/jayu23'} target="_blank" rel="noopener noreferrer" className="hover:text-accent sm:text-2xl text-xl transition-all duration-300">
        <TbBrandLeetcode />
      </a>
      <a href={'https://www.codechef.com/users/jayu23'} target="_blank" rel="noopener noreferrer" className="hover:text-accent sm:text-2xl text-xl transition-all duration-300">
        <SiCodechef />
      </a>
      <a href={'https://twitter.com/jaivik23'} target="_blank" rel="noopener noreferrer" className="hover:text-accent sm:text-2xl text-xl transition-all duration-300">
        <RiTwitterLine />
      </a>
    </div>
  );
};

export default Socials;
