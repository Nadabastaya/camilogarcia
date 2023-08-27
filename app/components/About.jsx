"use client";
import Image from "next/image";
import OptionTitle from "./OptionTitle";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col p-6 md:px-10 lg:p-12 xl:p-20 xl:h-screen 2xl:py-20 2xl:px-96 ">
      <div className="flex flex-grow flex-col items-center ">
        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-4">
          <div
            className="text-center  md:text-left md:col-span-2 text-5xl xl:text-6xl 2xl:text-7x1"
            id="1"
          >
            WHO AM I?
          </div>
          <div
            className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-2 text-lg md:text-md lg:text-xl xl:text-2xl"
            id="2"
          >
            Desarrollador fullstack con más de 2 años de experiencia trabajando
            con distintas tecnologías. Siempre en continuo aprendizaje para
            estar al día con las nuevas actualizaciones del munndo TI. Gracias a
            esto, he podido demostrar mi versatilidad y adaptación a distintos
            escenarios rindiendo siempre a mi 100%, ofreciendo una alta calidad
            y rendimiento.
          </div>
          <div className="md:col-span-2 md:col-start-1 md:row-start-4" id="3">
            <div className="py-4 flex gap-2 md:gap-4">
              <span>
                <FaGithubSquare className="text-4xl lg:text-5xl xl:text-6xl hover:scale-110 transition-transform duration-200" />
              </span>
              <span>
                <FaLinkedin className="text-4xl lg:text-5xl xl:text-6xl hover:scale-110 transition-transform duration-200" />
              </span>
              <button className="bg-black rounded-lg px-1 lg:px-3 w-32 h-9 lg:w-40 lg:h-12 xl:w-44 xl:h-14 lg:text-lg hover:border-2">
                Get in Touch
              </button>
              <button className="bg-black rounded-lg px-1 lg:px-3 w-32 h-9 lg:w-40 lg:h-12 xl:w-44 xl:h-14 text-lg hover:border-2">
                View my CV
              </button>
            </div>
          </div>
          <div
            className="md:row-span-4 md:col-start-3 md:row-start-1 flex items-center justify-center lg:justify-end"
            id="4"
          >
            <Image
              className="rounded-lg lg:w-[250px] xl:w-[270px] 2xl:w-[350px]"
              src={"/me.jpeg"}
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>

        <div className="h-1/2 py-10 lg:py-10 xl:py-5 2xl:py-14 flex flex-col items-center gap-4 lg:gap-2 2xl:gap-4">
          <div className="text-3xl">My Skills</div>
          <div className="grid grid-flow-row grid-cols-4 md:grid-cols-8 lg:grid-cols-10 lg:justify-center lg:items-center gap-4 ">
            <div className=" bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/html-5.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/css3.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/javascript.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/react.svg"}
                width={70}
                height={50}
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/next.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/tailwind-css.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/styled-components-48.png"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/nodejs.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/express-js.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200  lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/c-sharp.svg"}
                width={33}
                height={33}
              />
            </div>
            <div className="bg-gray-200 rounded-md hover:border-2 hover:border-slate-400 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/dot-net-core.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/java.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/sql-server.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/oracle.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/mongodb.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/mysql.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/docker.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/azure.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/aws.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/git.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/github.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/bitbucket.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="bg-gray-700 rounded-md hover:border-2 w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 flex justify-center items-center">
              <Image
                className="hover:scale-125 transition-transform duration-200 lg:w-[35px] xl:w-[40px] 2xl:w-[48px]"
                src={"/skills/vercel.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
