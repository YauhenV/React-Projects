import React from 'react';
import { itemsData } from '../data/itemsData';
import styles from "./items.module.css";
import stylesRoute from "./route.module.css";


function Items() {
  return (
    <section className={stylesRoute["section-wrapper"]}>
      <div className={stylesRoute.wrapper}>
        <div className={stylesRoute["wrapper-inner"]}>
          <h2>Items</h2>
          <div className={stylesRoute.items}>
            {itemsData.map((item, index) => {
              return (
                <div className={stylesRoute.item}>
                  <div key={index} >
                    <h3 className={styles["item-header"]}>{item.name}</h3>
                    <img src={require("../assets/" + item.icon)} alt={item.iconAlt} />
                  </div>
                </div>
              )
            })}
           
              


              {/* <h3>Time</h3>
              <div className={styles["item-table"]}>
                <div>
                  <img className={stylesRoute.icon} src={require("../assets/recovery_energy/clock-icon.png")} alt='Clock'></img>
                </div>
                <div className={stylesRoute["rest-energy-text"]}>
                  0.06% - 3 min
                  28.8% - 1 day
                </div> */}
              {/* </div>      */} 
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Items