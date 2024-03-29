"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import ProjectsContainer from "../projectContainer/projectsContainer";
import projectList from "../../../public/projects";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, AlertTitle } from "@mui/material";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null); // Define the type of ref

  const notifySuccess = () => toast.success("Message Sent!");
  const notifyError = () => toast.error("Something went wrong!");

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    emailjs
      .sendForm("service_ccozlgf", "template_nozvuvd", "#contact-form", {
        publicKey: "7nGazmEygqADcG5xQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notifySuccess();
        },
        (error) => {
          console.log("FAILED...", error);
          notifyError();
        }
      );
  };

  return (
    <section
      className="project-container py-10 px-4 animate__animated"
      ref={sectionRef}
    >
      <ToastContainer theme="dark" transition={Bounce} />
      <div>
        <div className="project-top-header flex gap-2 items-center px-5">
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
        <div className="project-mid-header">
          <div className="project-title">
            <h1 className="text-nowrap sm:text-2xl fc-accent mx-10">
              Contact Me
            </h1>
          </div>
          <div className="project-title-line">
            <div></div>
          </div>
        </div>
        <div className="project-content p-20 w-full flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-wrapper"
            id="contact-form"
          >
            <h1 className="text-center text-2xl mb-8">Message Me</h1>
            <div className="mb-8">
              <TextField
                {...register("fullName", { required: "Full Name is required" })}
                label="Full Name"
                variant="filled"
                className="w-full"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            </div>

            <div className="mb-8">
              <TextField
                {...register("email", { required: "Email is required" })}
                label="Email"
                type="email"
                variant="filled"
                className="w-full"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            </div>

            <div className="mb-8">
              <TextField
                {...register("message", { required: "Message is required" })}
                multiline
                variant="filled"
                label="Enter your text here"
                placeholder="Placeholder text"
                rows={4} // Adjust as needed
                fullWidth
                className="fc-primary"
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </div>
            <div className="w-full">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ color: "#eeeeee", width: "100%" }}
              >
                <i className="fa-solid fa-paper-plane me-4"></i>
                <span>Send Email</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
