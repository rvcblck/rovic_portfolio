import Image from "next/image";
import "./style.scss";
import { Button } from "@mui/material";
import Link from "next/link";

interface Images {
  img: string;
}

interface ProjectProps {
  title: string;
  description: string;
  images: Images[];
}

export default function ProjectsContainer({
  title,
  description,
  images,
}: ProjectProps) {
  return (
    <div className="project-card flex flex-col">
      <div className="project-img-container">
        <Image
          src={`/rovic_portfolio/images/projects/${images[0].img}`}
          className="project-img"
          alt="Example Image"
          width={1920}
          height={1080}
          priority
        />
        <div className="view-more flex justify-center items-center">
          <Link href="/my-projects">
            <Button variant="outlined" color="secondary">
              View More
            </Button>
          </Link>
        </div>
      </div>

      <div className="project-details-container p-4 flex flex-col">
        <h1 className="text-wrap w-full text-xl fc-primary mb-2">{title}</h1>
        <p className="project-description fc-accent font-thin mb-8">
          {description}
        </p>
        <div className="mt-auto cursor-pointer fc-primary hover:text-white">
          <Link href="/my-projects">
            <span className="me-3 ">See More</span>
            <i className="fa-solid fa-arrow-right text-md "></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
