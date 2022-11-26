import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import {SidebarData} from "./SidebarData";
import styles from "./navbar.module.css";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined", size: "1.5rem", className: styles.icon }}>
        <nav className={sidebar ? `${styles["nav-menu"]} ${styles["active"]}` : styles["nav-menu"]}>
          <ul className ={styles["nav-menu-items"]} >
            <li >
              <div className={sidebar ? `${styles.toggle} ${styles["nav-active"]}`: styles.toggle} onClick={showSidebar}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} (${subNav} &&  ${styles["new-nav-text"]})`} onClick={item.subNav && showSubNav}>
                  <div className={item.cSubName}>
                    <div>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        {item.subNav && subNav 
                          ? item.iconClosed
                          : item.subNav
                          ? item.iconOpened
                          : null
                        }
                      </Link>
                    </div>
                    {item.subNav && subNav && item.subNav.map((item, index) => {
                      return (
                        <div key={index} className={item.cName}>
                          <Link to={item.path}>
                            <span>{item.title}</span>
                          </Link>
                        </div>
                      )
                    })}
                  </div>  
                </li>
              );
            })}

          </ul>
        </nav>
      </IconContext.Provider>
    </>
)}

export default Navbar