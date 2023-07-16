'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";

const Extras = () => {

  return (
    <main className="flex flex-col justify-center h-screen items-center font-trajan-bold">
        <OptionTitle>Extras</OptionTitle>
        <div className="w-screen px-44 flex flex-col gap-4 flex-grow bg-red-400">
           
        </div>
        <Back />
    </main>
  );
};

export default Extras;