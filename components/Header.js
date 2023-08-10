import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return <header className="z-30 w-full absolute flex items-center px-16 xl:p-0 xl:h-[90px] h-[70px] pt-8">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center md:gap-y-6 gap-y-1 py-8">
        <Link href={'/'}>
          {/* <Image
            src={'/logo.svg'}
            width={220}
            height={48}
            alt=""
            priority={true}
          /> */}
          <p className="inline text-white font-bold md:text-[32px] text-[30px] select-none">Jaivik</p><span className="text-accent inline text-[30px] select-none">.</span>
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
