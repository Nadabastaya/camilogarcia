import Image from "next/image";

const TechItem = (props) => {
  return (
    <section className=" h-28 flex gap-12 items-center font-trajan-bold text-5xl pl-8">
      <Image src={props.img} width={75} height={75} />
      <div className="flex flex-col gap-1">
        <div className="text-4xl">{props.tech}</div>
        <div className="text-xl">{props.level}</div>
      </div>
    </section>
  );
};

export default TechItem;
