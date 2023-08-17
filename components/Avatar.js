import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none justify-end items-end h-full">
    <Image
      src={"/new-avatar.png"}
      width={420}
      height={680}
      alt=""
      className="translate-z-0 max-w-[420px] max-h-[680px]"
    />
  </div>;
};

export default Avatar;
