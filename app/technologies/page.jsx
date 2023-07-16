"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";
import TechItem from "../components/TechItem";

const Techs = () => {

  const reactIcon = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'

  return (
    <main className="flex flex-col justify-center h-screen items-center font-trajan-bold">
      <OptionTitle>Tecnologies</OptionTitle>
      <div className="w-screen px-[450px] bg-red-400 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
          <TechItem img={ reactIcon } tech='React' level='Intermedio' />
        </div>
      </div>
      <Back />
    </main>
  );
};

export default Techs;
