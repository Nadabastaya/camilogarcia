'use client'
import OptionTitle from "../components/OptionTitle";
import Back from "../components/Back";

const About = () => {

  return (
    <main className="flex flex-col justify-center h-screen items-center font-trajan-bold">
        <OptionTitle>Projects</OptionTitle>
        <div className="w-screen px-44 flex flex-col gap-4 flex-grow bg-red-400">
            <section className="bg-blue-500 h-[138px] flex items-center font-trajan-bold text-5xl pl-8">1.</section>
            <section className="bg-blue-500 h-[138px]  flex items-center font-trajan-bold text-5xl pl-8">2.</section>
            <section className="bg-blue-500 h-[138px]  flex items-center font-trajan-bold text-5xl pl-8">3.</section>
            <section className="bg-blue-500 h-[138px]  flex items-center font-trajan-bold text-5xl pl-8">4.</section>
        </div>
        <Back />
    </main>
  );
};

export default About;
