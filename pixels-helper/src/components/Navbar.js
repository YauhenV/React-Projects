import React, {useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {SidebarData} from "./SidebarData";
import styles from "./navbar.module.css";
import SubMenu from './SubMenu';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  

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
                <SubMenu 
                  item={item}
                  key={index}
                  showSubMenuRightNow={sidebar}
                 />
              );
            })}

          </ul>
        </nav>
      </IconContext.Provider>
    </>
)}

export default Navbar