import React, {useState, useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";
import animationSubMenu from "./animationSubMenu.module.css";;

function SubMenu( {item, showSubMenuRightNow, showSidebar} ) {
  // let ktoOtrilMenu;
  const [subNav, setSubNav] = useState(false);
  const [textDecoration, setTextDecoration] = useState(false);

 function showSubNav (event) {
  // ktoOtrilMenu = event.target.closest("a").id;
  // console.log(ktoOtrilMenu)
  setSubNav(!subNav);


  // Открывает окно меню при нажатии на пункт с субменю
  if (showSubMenuRightNow === false) {
    showSidebar()
  }
  };
  
  useEffect(() => {
    //setSubNav(showSubMenuRightNow)
    //Всегда закрываем все субменю перед закрытием основного меню
    if (showSubMenuRightNow === false) {
      setSubNav(showSubMenuRightNow)
    } 
  }, [showSubMenuRightNow])
  
  useEffect(() => {
    if (subNav) {
      setTextDecoration(styles.link);
    } else {
      setTextDecoration(false)
    };
  }, [subNav])

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
      <li className={`${item.cName}`} >
        <div className={item.cSubName} >
        {/*Разные стили и сслыки для пунктов с подменю и без*/}
          {item.subNav 
          ? (
            <Link className={`${textDecoration}`} onClick={showSubNav} id={"subMenu"}>
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
          <TransitionGroup>
          {/*Выводим подменю */}
          {item.subNav && subNav && item.subNav.map((item, index) => {
             return (
              <CSSTransition timeout={200} classNames={animationSubMenu} key={index}>
                <Link to={item.path} className={item.cName}>
                  <span>{item.title}</span>
                </Link>
              </CSSTransition>
            )
          })} 
          </TransitionGroup>
        </div>  
      </li>
      
    </>
  )
}

export default SubMenu