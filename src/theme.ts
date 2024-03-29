"use client";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#76abae", // Your primary color
    },
    secondary: {
      main: "#eeeeee", // Your secondary color
    },
    info: {
      main: "#222831",
    },
    text: {
      primary: "#222831", // Your accent color
    },
    background: {
      default: "#31363f", // Your background color
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Use your custom font
  },
});

export default theme;
