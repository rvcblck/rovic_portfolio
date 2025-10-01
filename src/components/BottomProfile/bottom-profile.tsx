"use client";
import Image from "next/image";
import "./style.scss";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";

export default function BottomProfile() {
  const sectionRef = useRef<HTMLDivElement>(null); // Define the type of ref

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is intersecting with the viewport, add the "fade-left" class
          sectionRef.current?.classList.remove("animate__fadeOutRight");
          sectionRef.current?.classList.add("animate__fadeInRight");
        } else {
          // If the section is not intersecting with the viewport, remove the "fade-left" class
          sectionRef.current?.classList.remove("animate__fadeInRight");
          sectionRef.current?.classList.add("animate__fadeOutRight");
        }
      });
    });

    // Perform a null check before calling observe
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="bottom-container animate__animated animate__fadeInLeft sm:block md:block lg:hidden xl:hidden py-10 px-4"
      ref={sectionRef}
    >
      <div className="bottom-wrapper flex flex-col items-center">
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
        <a href="/DeLeon,Rovic_Resume.pdf" target="_blank" download>
          <Button variant="contained" color="secondary" >
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
    </div>
  );
}
// className="
