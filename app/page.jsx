"use client";
import "atropos/css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Contact from "./components/ContactForm";
import About from "./components/About";
import Projects from "./components/Projects";
import Techs from "./components/Technologies";
import Header from "./components/Header";
import WebMenu from "./components/WebMenu";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isHovered, setIsHovered] = useState({
    about: false,
    projects: false,
    technologies: false,
    contact: false,
    extras: false,
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

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
    <div className=" bg-gray-900 flex flex-col">
      <Navbar />
      <div className=" ">
        <div id="header">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div className="bg-red-500  p-6 md:px-20 lg:px-28 xl:px-48 2xl:px-80 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex flex-col gap-2">
          <div>"New circumstances require new answers"</div>
          <div className="flex justify-end">Satoru Iwata</div>
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        {/* TODO: footer */}
      </div>
      <div className="bg-gray-800 flex flex-col gap-4 p-6 items-end md:justify-between">

          <div>GITHUB</div>
          <div>LINKEDIN</div>
          <div>MAIL</div>
          <div>2023 - Camilo García</div>

      </div>
    </div>
  );
}

{
  /* <div className="flex overflow-hidden ">
      <Navbar />
       <div className=" lg:w-2/6 bg-red-800 h-screen text-white fixed top-0 left-0 flex flex-col">
     
      <Navbar />
      </div>
      <div className="bg-gray-800 w-4/6 ml-auto overflow-y-auto px-10">
        <div id="header">
          <Header />
        </div>
        <div id="about">
        <About />
        </div>
        <div id="projects">
        <Projects />
        </div>
        <div id="contact">
        <Contact />
        </div>
      </div>
    </div> */
}
