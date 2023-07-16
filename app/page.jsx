"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState({
    about: false,
    projects: false,
    technologies: false,
    contact: false,
    extras: false,
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
    <main className="flex flex-col justify-center items-center h-screen font-trajan-bold">
      <div className="h-96 flex text-9xl items-center text-center">
        <span>CAMILO GARCÍA</span>
      </div>
      <div className="flex flex-col justify-center gap-8 text-center text-3xl h-96 w-96">
        <div
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={() => handleMouseLeave("about")}
          className={`flex flex-row justify-center items-center h-9`}
        >
          {isHovered.about && (
            <Image
              src="/menu-icon-left.png"
              width={36}
              height={29}
              alt="hola"
              className="mr-5"
            />
          )}
          <Link href="/about">ABOUT</Link>
          {isHovered.about && (
            <Image
              src="/menu-icon-right.png"
              width={36}
              height={29}
              alt="hola"
              className="ml-5"
            />
          )}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={() => handleMouseLeave("projects")}
          className={`flex flex-row justify-center items-center h-9`}
        >
          {isHovered.projects && <Image
              src="/menu-icon-left.png"
              width={36}
              height={29}
              alt="hola"
              className="mr-5"
            />}
            <Link href='/projects'>PROJECTS</Link>
          {isHovered.projects && <Image
              src="/menu-icon-right.png"
              width={36}
              height={29}
              alt="hola"
              className="ml-5"
            />}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("technologies")}
          onMouseLeave={() => handleMouseLeave("technologies")}
          className={`flex flex-row justify-center items-center h-9`}
        >
          {isHovered.technologies && <Image
              src="/menu-icon-left.png"
              width={36}
              height={29}
              alt="hola"
              className="mr-5"
            />}
            <Link href='/technologies'>Technologies</Link>
          {isHovered.technologies && <Image
              src="/menu-icon-right.png"
              width={36}
              height={29}
              alt="hola"
              className="ml-5"
            />}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={() => handleMouseLeave("contact")}
          className={`flex flex-row justify-center items-center h-9`}
        >
          {isHovered.contact && <Image
              src="/menu-icon-left.png"
              width={36}
              height={29}
              alt="hola"
              className="mr-5"
            />}
            <Link href='/contact'>CONTACT</Link>
          {isHovered.contact && <Image
              src="/menu-icon-right.png"
              width={36}
              height={29}
              alt="hola"
              className="ml-5"
            />}
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("extras")}
          onMouseLeave={() => handleMouseLeave("extras")}
          className={`flex flex-row justify-center items-center h-9`}
        >
          {isHovered.extras && <Image
              src="/menu-icon-left.png"
              width={36}
              height={29}
              alt="hola"
              className="mr-5"
            />}
            <Link href='/extras'>EXTRAS</Link>
          {isHovered.extras && <Image
              src="/menu-icon-right.png"
              width={36}
              height={29}
              alt="hola"
              className="ml-5"
            />}
        </div>
      </div>
    </main>
  );
}
