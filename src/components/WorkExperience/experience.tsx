"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useRef } from "react";

export default function Experience() {
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
              Work Experience
            </h1>
          </div>
          <div className="title-line">
            <div></div>
          </div>
        </div>
        <div className="content-container p-20">
          <div className="mb-10">
            <div className="flex flex-row items-center edu-title">
              <i className="fa-solid fa-circle me-10 fc-primary"></i>
              <h1 className="text-xl fc-accent flex items-center gap-4">
                JE310 SOLUTION{" "}
                <small className="text-sm fc-gray">
                  ( May 2023 - Feb 2024 )
                </small>
              </h1>
            </div>

            <ul className="list-disc ps-20 pt-5 edu-details">
              <small className="text-sm fc-gray">responsibilities:</small>
              <li>Full Stack Web Developer</li>
              <li>Manage Database</li>
              <li>UI/UX</li>
              <li>Support Clients</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="flex flex-row items-center edu-title">
              <i className="fa-solid fa-circle me-10 fc-primary"></i>
              <h1 className="text-xl fc-accent flex items-center gap-4">
                FREELANCE{" "}
                <small className="text-sm fc-gray">
                  ( Feb 2024 - current )
                </small>
              </h1>
            </div>

            <ul className="list-disc ps-20 pt-5 edu-details">
              <small className="text-sm fc-gray">responsibilities:</small>
              <li>Full Stack Web Developer</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="flex flex-row items-center edu-title">
              <i className="fa-solid fa-circle me-10 fc-primary"></i>
              <h1 className="text-xl fc-accent flex items-center gap-4">
                PTO Media{" "}
                <small className="text-sm fc-gray">
                  ( April 2024 - current )
                </small>
              </h1>
            </div>

            <ul className="list-disc ps-20 pt-5 edu-details">
              <small className="text-sm fc-gray">responsibilities:</small>
              <li>Full Stack Web Developer</li>
            </ul>
          </div>

          <Image
            src={`/rovic_portfolio/images/blob2.png`}
            className="blob2"
            alt="Example Image"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>
    </section>
  );
}
