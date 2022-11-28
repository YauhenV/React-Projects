import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

function SubMenu( {item}) {

  const [subNav, setSubNav] = useState(false);
  const [textDecoration, setTextDecoration] = useState("underline");

  const showSubNav = () => {
    setSubNav(!subNav);
    setTextDecoration("none");
    console.log(textDecoration)
  };



  return (
      <li className={`${item.cName}`} onClick={item.subNav && showSubNav}>
        <div className={item.cSubName}>
          <div>
          {item.subNav ? (
            <Link style={{textDecoratin: textDecoration}}>
              {item.icon}
              <span>{item.title}</span>
              {item.subNav && subNav 
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null
              }
            </Link>
          )
          : (
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
                {item.subNav && subNav 
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null
                }
              </Link>
          )}
            
          </div>
          {subNav && item.subNav.map((item, index) => {
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
  )
}

export default SubMenu