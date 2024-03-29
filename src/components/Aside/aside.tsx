import Image from "next/image";
import "./style.scss";
import { Button } from "@mui/material";

export default function Aside() {
  return (
    <div className="aside-container flex flex-col items-center animate__animated animate__fadeInLeft">
      <Image
        src="/rovic_portfolio/images/logo.svg"
        className="logo-img mb-20"
        alt="Example Image"
        width={200}
        height={200}
      />

      <div className="profile-wrapper mb-8">
        <Image
          src="/rovic_portfolio/images/profile.svg"
          className="profile-img"
          alt="Example Image"
          width={200}
          height={200}
        />
      </div>

      <h1 className="fc-primary text-3xl font-semibold">Rovic De Leon</h1>
      <h3 className="text-base fc-gray mb-8">FULL STACK WEB DEVELOPER</h3>
      <a href="/DeLeon,Rovic_Resume.pdf" target="_blank">
        <Button variant="contained" color="secondary">
          <i className="fa-solid fa-arrow-down me-4"></i> Resume
        </Button>
      </a>
      {/* social media  */}
      <div className="mt-auto flex flex-row gap-2 py-20">
        <a href="https://www.facebook.com/rovic.killua16" target="_blank">
          <div className="icon-container bg-white p-2 rounded-full flex justify-center items-center">
            <Image
              src="/rovic_portfolio/images/icons/fb.svg"
              className="profile-img"
              alt="Example Image"
              width={25}
              height={25}
            />
          </div>
        </a>
        <a href="mailto:deleon.rovic.g.5570@gmail.com" target="_blank">
          <div className="icon-container aspect-square bg-white p-2 rounded-full flex justify-center items-center">
            <Image
              src="/rovic_portfolio/images/icons/gmail.svg"
              className="profile-img"
              alt="Example Image"
              width={25}
              height={25}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rovic-de-leon-8980a4261"
          target="_blank"
        >
          <div className="icon-container bg-white p-2 rounded-full flex justify-center items-center">
            <Image
              src="/rovic_portfolio/images/icons/linkedIn.svg"
              className="profile-img"
              alt="Example Image"
              width={25}
              height={25}
            />
          </div>
        </a>
        <a href="https://m.me/rovic.killua16" target="_blank">
          <div className="icon-container bg-white p-2 rounded-full flex justify-center items-center">
            <Image
              src="/rovic_portfolio/images/icons/messenger.svg"
              className="profile-img"
              alt="Example Image"
              width={25}
              height={25}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
