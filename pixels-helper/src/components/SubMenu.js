import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

function SubMenu({item, showSubMenuRightNow} ) {
  const [subNav, setSubNav] = useState(false);
  const [textDecoration, setTextDecoration] = useState(false);

  useEffect(() => {
    setSubNav(showSubMenuRightNow)
  }, [showSubMenuRightNow])

  const showSubNav = () => {
    setSubNav(!subNav);
    if (subNav) {
      setTextDecoration(false)
    } else {
      setTextDecoration(styles.link)
    };
  };

  //Убрано дублирование кода в отображении sidebar есть ли подменю или нет
  const showSidebarTitle = () => {
    return (
      <>
        {item.icon}
        <span>{item.title}</span>
      </>
    )
  }



  return (
    <>
    {console.log()}
      <li className={`${item.cName}`} >
        <div className={item.cSubName} >
        {/*Разные стили и сслыки для пунктов с подменю и без*/}
          {item.subNav 
          ? (
            <Link className={`${textDecoration}`} onClick={showSubNav}>
              {showSidebarTitle()}
              {item.subNav && subNav 
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null
              }
            </Link>
          ) : (
              <Link to={item.path}>
                {showSidebarTitle()}
              </Link>
          )}
          
          {/*Выводим подменю */}
          {item.subNav && subNav && item.subNav.map((item, index) => {
             return (
              <Link to={item.path}  key={index} className={item.cName}>
              <span>{item.title}</span>
              </Link>
        )
      })} 
        </div>  
      </li>
      
    </>
  )
}

export default SubMenu