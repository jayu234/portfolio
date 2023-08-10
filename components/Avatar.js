import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none justify-end items-end h-full">
    <Image
      src={"/avatar.png"}
      width={620}
      height={590}
      alt=""
      className="translate-z-0 max-w-[620px] max-h-[590px]"
    />
  </div>;
};

export default Avatar;
