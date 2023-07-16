"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";

const About = () => {
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
    <main className="flex flex-col h-screen justify-center items-center font-trajan-bold">
      <OptionTitle>Who is Camilo?</OptionTitle>
      <div className="h-96 flex flex-grow text-2xl items-center text-center font-trajan px-56">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        laboriosam quam. Omnis impedit cumque veritatis vitae quam, laboriosam
        nulla expedita voluptatibus praesentium nesciunt iure incidunt dicta
        similique sint repellat consequuntur. Sit, eum excepturi? Recusandae
        vero voluptates laboriosam enim vel quasi tenetur illum, doloremque
        pariatur deserunt eius distinctio obcaecati a odio libero hic aperiam.
        Quae, quas veniam officia ullam hic dolor.
      </div>
      <Back />
    </main>
  );
};

export default About;
