import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";


import styles from "./navbar.module.css";

export const SidebarData = [
  {
    title: "requires energy",
    path: "/",
    icon: <BsIcons.BsBattery />,
    cName: styles["nav-text"],
  },
  {
    title: "recovery energy",
    path: "/recoveryEnergy",
    icon: <BsIcons.BsBatteryFull />,
    cName: styles["nav-text"],
  },
  {
    title: "cooking recipes",
    path: "/recipesCooking",
    icon: <FaIcons.FaBookOpen />,
    cName: styles["nav-text"],
  },
  {
    title: "woodwork recipes",
    path: "/recipesWoodwork",
    icon: <FaIcons.FaBookOpen />,
    cName: styles["nav-text"],
  },
  {
    title: "granger recipes",
    path: "/recipesGranger",
    icon: <FaIcons.FaBookOpen />,
    cName: styles["nav-text"],
  },
  {
    title: "items",
    path: "/items",
    icon: <FaIcons.FaSitemap />,
    cName: styles["nav-text"],
  },
  {
    title: "calculator",
    path: "/calculators",
    icon: <FaIcons.FaCalculator />,
    cName: styles["nav-text"],
  }
];


// consumption energy