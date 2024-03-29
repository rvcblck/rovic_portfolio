import Image from "next/image";
import "./style.scss";

interface ChipsProps {
  title: string;
  image: string;
  bgcolor: string;
  border: string;
}

export default function SmallChips({
  title,
  image,
  bgcolor,
  border,
}: ChipsProps) {
  return (
    <div className="chip-container flex flex-row gap-4 rounded sm:py-1 sm:px-8 md:py-2 md:px-10 items-center">
      <Image
        src={`/images/chips/${image}`}
        className="chips-img"
        alt="Example Image"
        width={20}
        height={20}
        priority
        // style={{ width: "3rem", height: "3rem" }}
      />
      <h1 className="fc-accent text-sm">{title}</h1>
    </div>
  );
}
