'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";
import AtroposTest from '../components/Atropos/AtroposTest'
import Atropos from "atropos/react";

const Extras = () => {

  return (

    <div id="app">
      {/* Atropos */}
      <Atropos className="w-[520px] h-[560px] bg-[url('../public/HL.png')]"
        activeOffset={40}
        shadow={true}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <Image 
        src={'/HL.png'}
        width={500}
        height={500}
        alt="aaa"/>
      </Atropos>
    </div>


    

    

  );
};

export default Extras;