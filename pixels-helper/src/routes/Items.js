import React, { useEffect, useState } from 'react';
import { itemsData } from '../data/itemsData';
import { IconContext } from 'react-icons/lib';
import * as SlIcons from "react-icons/sl";
import styles from "./items.module.css";
import stylesRoute from "./route.module.css";


function Items() {

  const [itemTarget, setItemTarget] = useState("");

  const itemToggleInfo = (item) => {
    if (itemTarget === "" || itemTarget !== item) {
      setItemTarget(item);
    } else {
      setItemTarget("");
    }
  }

  const info = (item) => {
    return (
      <div className={styles.infoStyle}>
        <div>
          <img src={require("../assets/" + item.parentsIcon)} alt={item.iconAlt} width="112px" height="176px" />
        </div>
        <div className={styles.infoItem}>
          <img src={require("../assets/" + item.icon)} alt={item.iconAlt} width="48px" height="48px" />
          {item.buy 
            && <div className={styles.infoText}>buy: {item.buy}<img src={require("../assets/berry-coin.png")} width="16px" height="16px" alt='Berry Coin' /></div>}
          {item.price 
            && <div className={styles.infoText}>sell: {item.price}<img src={require("../assets/berry-coin.png")} width="16px" height="16px" alt='Berry Coin' /></div>}
          {item.energyConsumption 
            && <div className={styles.infoText}>energy: <span className={styles.textRed}>-{item.energyConsumption}<SlIcons.SlEnergy /></span></div>}
          {item.energyRecovery 
            && <div className={styles.infoText}>energy: <span className={styles.textGreen}>+{item.energyRecovery}<SlIcons.SlEnergy /></span></div>}
          {item.experience 
            && <div className={styles.infoText}><img src={require("../assets/" + item.sectionIcon)} alt={item.sectionIconAlt} width="16px" height="16px" /> exp.: {item.experience} XP</div>}
          {item.reusable 
            && <div className={styles.infoText}>reusable: {item.reusable}</div>}
        </div>
        
        {item.extraItems 
          && <div> 
            {item.extraItems.forEach(item => itemsData.filter(child => child.id === item).map(item => {
              return (
                item.buy
              )
            }
              
          ))}
          </div>}
        
        <div>
          {itemsData.filter(child => child.id === item.child).map(item => (
            <div className={styles.infoItem} key={item.id}>
            <img src={require("../assets/" + item.icon)} alt={item.iconAlt} width="48px" height="48px" />
          {item.buy 
            && <div className={styles.infoText}>buy: {item.buy}<img src={require("../assets/berry-coin.png")} width="16px" height="16px" alt='Berry Coin' /></div>}
          {item.price 
            && <div className={styles.infoText}>cell: {item.price}<img src={require("../assets/berry-coin.png")} width="16px" height="16px" alt='Berry Coin' /></div>}
          {item.energyConsumption 
            && <div className={styles.infoText}>energy: <span className={styles.textRed}>-{item.energyConsumption}<SlIcons.SlEnergy /></span></div>}
          {item.energyRecovery 
            && <div className={styles.infoText}>energy:<span className={styles.textGreen}>+{item.energyRecovery}<SlIcons.SlEnergy /></span></div>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // useEffect(() => {
  //   console.log(itemTarget)
  // }, [itemTarget])

  return (
    <section className={stylesRoute["section-wrapper"]}>
      <IconContext.Provider value={{ color: "undefined", size: "0.8rem"}}>
        <div className={stylesRoute.wrapper}>
          <div className={stylesRoute["wrapper-inner"]}>
            <h2>Items</h2>
            <div className={stylesRoute.items}>
              {itemsData.map((item) => {
                return (
                  <div key={item.id} className={`${stylesRoute.item} ${styles.item}`} onClick={() => itemToggleInfo(item.id)}>
                    <div>
                      <h3 className={styles["item-header"]}>{item.name}</h3>
                      {
                        itemTarget === item.id 
                        ? info(item) 
                        : <img src={require("../assets/" + item.icon)} alt={item.iconAlt} width="48px" height="48px" />  
                      }
                    </div>
                  </div>
                )
              })}
                
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  )
}

export default Items