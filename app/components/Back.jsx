import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Back = () => {
  const [isHovered, setIsHovered] = useState({
    back: false,
  });

  const handleMouseEnter = (key) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <div className="flex items-end text-3xl font-trajan-bold p-14">
      <div
        onMouseEnter={() => handleMouseEnter("back")}
        onMouseLeave={() => handleMouseLeave("back")}
        className={`flex flex-row justify-center items-center h-9`}
      >
        {isHovered.back && (
          <Image
            src="/menu-icon-left.png"
            width={36}
            height={29}
            alt="hola"
            className="mr-5"
          />
        )}
        <Link href="/">BACK</Link>
        {isHovered.back && (
          <Image
            src="/menu-icon-right.png"
            width={36}
            height={29}
            alt="hola"
            className="ml-5"
          />
        )}
      </div>
    </div>
  );
};

export default Back;
