"use client";
import SwiperComponent from "@/components/SwiperComponent/swiperComponent";
import Image from "next/image";
import projectList from "../../../public/projects";
import "./style.scss";
import SmallChips from "@/components/SmallChips/chips";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyProjects() {
  // Set an initial project as selected
  const initialSelectedIndex = 0; // You can set any index here
  const initialProjectList = projectList.map((item, index) => ({
    ...item,
    selected: index === initialSelectedIndex, // Set selected to true for the initial project
  }));

  const [projectListNew, setProjectListNew] = useState(initialProjectList);

  const handleItemClick = (index: any) => {
    const updatedProjectList = projectListNew.map((item, idx) =>
      idx === index ? { ...item, selected: true } : { ...item, selected: false }
    );
    setProjectListNew(updatedProjectList);
  };

  return (
    <div className="pages-wrapper">
      <div className="animate__animated animate__fadeInDown">
        <div className="header px-10 w-full py-5">
          <Link href="/">
            <i className="fa-solid fa-arrow-left text-2xl fc-accent"></i>
          </Link>
          <h1 className="text-2xl text-white text-center font-semibold">
            My Projects
          </h1>
        </div>

        <div className="swiper-container mb-10">
          <SwiperComponent
            selectedData={projectListNew.find((item) => item.selected)}
          ></SwiperComponent>
        </div>
      </div>

      <div className="project-list-container py-10 animate__animated animate__fadeInUp">
        <ul className="flex flex-col justify-center items-center m-0">
          {projectListNew.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={item.selected ? "active" : ""}
            >
              <div>
                <h1 className="text-2xl fc-accent mb-4">{item.title}</h1>
                <p className="text-md fc-gray mb-10">{item.description}</p>
                <div className="flex flex-row gap-4">
                  {item.language.map((language, dex) => (
                    <SmallChips
                      key={dex}
                      title={language.title}
                      image={language.image}
                      bgcolor={language.bgcolor}
                      border={language.border}
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
