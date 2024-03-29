import Image from "next/image";
import "./style.scss";

interface ChipsProps {
  title: string;
  image: string;
  bgcolor: string;
  border: string;
}

export default function Chips({ title, image, bgcolor, border }: ChipsProps) {
  const borderStyle = border ? `2px solid #${border}` : undefined;

  const backgroundColor = bgcolor ? bgcolor : undefined;
  return (
    <div
      className="chip-container flex flex-row gap-4 rounded-full sm:py-1 sm:px-8 md:py-2 md:px-10 items-center"
      style={{ border: borderStyle, backgroundColor: backgroundColor }}
    >
      <Image
        src={`/images/chips/${image}`}
        className="chips-img"
        alt="Example Image"
        width={25}
        height={25}
        priority
        // style={{ width: "3rem", height: "3rem" }}
      />
      <h1 className="fc-accent text-md">{title}</h1>
    </div>
  );
}
