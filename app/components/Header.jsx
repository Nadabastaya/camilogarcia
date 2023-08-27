import Image from "next/image";

const Header = () => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center 2xl:px-32 2xl:gap-20 xl:px-24 xl:gap-14 lg:px-16 lg:gap-10 md:h-full md:py-40 md:px-20 md:gap-5 md:text-right p-10 text-center">
      <div className="flex flex-col gap-16 md:gap-6">
        <div className="text-6xl md:text-5xl xl:text-6xl 2xl:text-7xl text-[#593da0]">
          Let&apos;s work and have a coffee together.
        </div>
        <div className="2xl:text-3xl xl:text-2xl md:text-xl text-2xl">
          I&apos;m Camilo, Fullstack Developer. I build simply, interactive and funny
          web apps!
        </div>
      </div>
      <Image
        className="hidden md:block 2xl:w-[500px] xl:w-[400px] lg:w-[300px] md:w-[250px]"
        src={"Developer.svg"}
        width={500}
        height={500}
        alt=""
      />
    </div>
  );
};

export default Header;

