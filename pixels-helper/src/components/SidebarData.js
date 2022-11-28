import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as SlIcons from "react-icons/sl";


import styles from "./navbar.module.css";

export const SidebarData = [
  {
    title: "Energy",
    path: "",
    icon: <SlIcons.SlEnergy />,
    cName: styles["nav-text"],
    cSubName: styles["nav-subNav"],
    iconOpened: <RiIcons.RiArrowDownSLine />,
    iconClosed: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "requires",
        path: "/",
        icon: <BsIcons.BsBattery />,
        cName: styles["nav-subNav-text"],
      },
      {
        title: "recovery",
        path: "/recoveryEnergy",
        icon: <BsIcons.BsBatteryFull />,
        cName: styles["nav-subNav-text"],
      },
    ]
  },
  {
    title: "recipes",
    path: "",
    icon: <FaIcons.FaBookOpen />,
    cName: styles["nav-text"],
    cSubName: styles["nav-subNav"],
    iconOpened: <RiIcons.RiArrowDownSLine />,
    iconClosed: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Cooking",
        path: "/recipesCooking",
        icon: <FaIcons.FaBookOpen />,
        cName: styles["nav-subNav-text"],
      },
      {
        title: "Woodwork",
        path: "/recipesWoodwork",
        icon: <FaIcons.FaBookOpen />,
        cName: styles["nav-subNav-text"],
      },
      {
        title: "Granger",
        path: "/recipesGranger",
        icon: <FaIcons.FaBookOpen />,
        cName: styles["nav-subNav-text"],
      },

    ]
  },
  {
    title: "calculator",
    path: "/calculators",
    icon: <FaIcons.FaCalculator />,
    cName: styles["nav-text"],
  },
];


// consumption energy