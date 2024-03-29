import Image from "next/image";
import "./style.scss";
import { AOSInit } from "@/aos";

export default function Hero() {
  return (
    <section className="w-100">
      <div className="hero-img-container w-100 animate__animated animate__fadeInDown mb-10">
        <Image
          src="/images/hero.png"
          className="hero-img w-100"
          alt="Example Image"
          width={800}
          height={600}
          priority
          unoptimized
        />
        <div className="slogan">
          <h1 className="main-title md:text-4xl sm:text-xl fc-accent text-center text-nowrap mb-4 font-semibold tracking-wide glow">
            Crafting Digital Dreams into Reality
          </h1>

          <hr className="mb-4" />

          <h1 className="sub-title md:text-4xl sm:text-xl fc-accent text-center font-light glow">
            Your Vision, My Code
          </h1>
        </div>
      </div>
      <div className="hero-cards flex flex-row justify-around animate__animated animate__fadeInDown">
        <div className="cardss flex flex-col items-center justify-center sm:p-4 md:p-8 rounded-md shadow-2xl xl:basis-1/5 lg:basis-1/5 md:basis-1/4">
          <h1 className="sm:text-2xl md:text-4xl fc-primary font-semibold mb-2 ">
            +1
          </h1>
          <span className="card-span fc-primary text-center">
            yr/s of experience
          </span>
        </div>
        <div className="cardss flex flex-col items-center justify-center sm:p-4 md:p-8 rounded-md shadow-2xl xl:basis-1/5 lg:basis-1/5 md:basis-1/4">
          <h1 className="sm:text-2xl md:text-4xl fc-primary font-semibold mb-2">
            8
          </h1>
          <span className="card-span fc-primary text-center">
            Projects Handled
          </span>
        </div>
        <div className="cardss flex flex-col items-center justify-center sm:p-4 md:p-8 rounded-md shadow-2xl xl:basis-1/5 lg:basis-1/5 md:basis-1/4">
          <h1 className="sm:text-2xl md:text-4xl fc-primary font-semibold mb-2">
            100%
          </h1>
          <span className="card-span fc-primary text-center">
            Satisfaction Clients
          </span>
        </div>
      </div>
    </section>
  );
}
