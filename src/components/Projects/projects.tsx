"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useRef } from "react";
import ProjectsContainer from "../projectContainer/projectsContainer";
import projectList from "../../../public/projects";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Projects() {
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
      className="project-container py-10 px-4 animate__animated"
      ref={sectionRef}
    >
      <div className="">
        {/* header  */}
        <div className="project-top-header flex gap-2 items-center px-5">
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
        <div className="project-mid-header">
          <div className="project-title">
            <h1 className="text-nowrap sm:text-2xl fc-accent mx-10">
              My Projects
            </h1>
          </div>
          <div className="project-title-line">
            <div></div>
          </div>
        </div>
        <div className="project-content md:p-20 lg:p-20 xl:p-20 w-full ">
          <div className="project-wrapper">
            <div className="flex flex-row flex-wrap justify-around gap-10 mb-10">
              {projectList.map((item, index) => (
                <ProjectsContainer
                  key={index}
                  title={item.title}
                  description={item.description}
                  images={item.images}
                />
              ))}
            </div>
            <div className="text-center">
              <Link href="/my-projects">
                <Button variant="contained" color="info">
                  See More Projects
                </Button>
              </Link>
            </div>
          </div>
          <div className="wave-container">
            <Image
              src={`/images/wave.png`}
              className="wave"
              alt="Example Image"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
