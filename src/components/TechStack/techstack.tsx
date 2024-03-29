"use client";
import Image from "next/image";
import "./style.scss";
import { Button } from "@mui/material";
import Chips from "../Chips/chips";
import frontend from "../../../public/chipsData";
import backend from "../../../public/chipsBackend";
import database from "../../../public/chipsDatabase";
import others from "../../../public/chipsOthers";
import { useEffect, useRef } from "react";

export default function TechStack() {
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
    <section
      className="stack-container py-10 px-4 animate__animated animate__fadeInRight"
      ref={sectionRef}
    >
      <div className="">
        {/* header  */}
        <div className="top-header flex gap-2 items-center px-5">
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
        <div className="mid-header">
          <div className="title">
            <h1 className="text-nowrap sm:text-2xl fc-accent mx-10">
              Tech Stack
            </h1>
          </div>
          <div className="title-line">
            <div></div>
          </div>
        </div>
        <div className="content-container p-10 flex flex-col items-center justify-center">
          {/* frontend  */}
          <div className="mb-20">
            <div className="flex flex-row items-center justify-center mb-5">
              <Image
                src="/images/icons/frontend.svg"
                className="profile-img me-6"
                alt="Example Image"
                width={20}
                height={20}
              />
              <h1 className="text-center text-lg fc-primary font-semibold ">
                Frontend
              </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              {frontend.map((item, index) => (
                <Chips
                  key={index}
                  title={item.title}
                  image={item.image}
                  bgcolor={item.bgcolor}
                  border={item.border}
                />
              ))}
            </div>
          </div>
          {/* backend  */}
          <div className="mb-20">
            <div className="flex flex-row items-center justify-center mb-5">
              <Image
                src="/images/icons/backend.svg"
                className="profile-img me-6"
                alt="Example Image"
                width={20}
                height={20}
              />
              <h1 className="text-center text-lg fc-primary font-semibold ">
                Backend
              </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              {backend.map((item, index) => (
                <Chips
                  key={index}
                  title={item.title}
                  image={item.image}
                  bgcolor={item.bgcolor}
                  border={item.border}
                />
              ))}
            </div>
          </div>

          {/* database  */}
          <div className="mb-20">
            <div className="flex flex-row items-center justify-center mb-5">
              <Image
                src="/images/icons/database.svg"
                className="profile-img me-6"
                alt="Example Image"
                width={20}
                height={20}
              />
              <h1 className="text-center text-lg fc-primary font-semibold ">
                Database
              </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              {database.map((item, index) => (
                <Chips
                  key={index}
                  title={item.title}
                  image={item.image}
                  bgcolor={item.bgcolor}
                  border={item.border}
                />
              ))}
            </div>
          </div>

          {/* Others  */}
          <div className="">
            <div className="flex flex-row items-center justify-center mb-5">
              <i className="fa-solid fa-gear text-2xl me-6 fc-primary"></i>
              <h1 className="text-center text-lg fc-primary font-semibold ">
                Others
              </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              {others.map((item, index) => (
                <Chips
                  key={index}
                  title={item.title}
                  image={item.image}
                  bgcolor={item.bgcolor}
                  border={item.border}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
