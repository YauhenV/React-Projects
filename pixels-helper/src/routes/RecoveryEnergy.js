import React from 'react'
import stylesRoute from "./route.module.css"
import styles from "./recoveryEnergy.module.css";

function RecoveryEnergy() {
  return (
    <section className={stylesRoute["section-wrapper"]}>
    <div className={stylesRoute.wrapper}>
      <div className={stylesRoute["wrapper-inner"]}>
        <h2>Recovery Energy</h2>
        <div className={stylesRoute.items}>
          <div className={stylesRoute.item}>
            <h3>Time</h3>
            <div className={styles["item-table"]}>

              <div>
                <img className={stylesRoute.icon} src={require("../assets/recovery_energy/clock-icon.png")} alt='Clock'></img>
              </div>
              <div className={stylesRoute["rest-energy-text"]}>
                0.06% - 3 min
                28.8% - 1 day
              </div>
            </div>     
          </div> 

          <div className={stylesRoute.item}>
            <h3>Sauna</h3>
            <div className={styles["item-table"]}>
              <div>
                <img className={stylesRoute.icon} src={require("../assets/recovery_energy/sauna.png")} alt='Sauna'></img>
              </div>
              <div className={`${stylesRoute["rest-energy-text"]}`}>
                0.4% - 1 min
                25% - 1 day
              </div>
            </div>
          </div>

          <div className={stylesRoute.item}>
            <h3>Energy Drinks</h3>
            <div className={styles["item-table"]}>
              <div>
                <img className={stylesRoute.icon} src={require("../assets/recovery_energy/icon_energydrink.png")} alt='Energy drink'></img>
              </div>
              <div className={`${stylesRoute["rest-energy-text"]}`}>
                5%
              </div>
            </div>
          </div>

          <div className={stylesRoute.item}>
            <h3>Farming</h3>
            <div className={styles["item-table"]}>
              <div>
                <img className={stylesRoute.icon} src={require("../assets/farming-icon/itm_popberry.png")} alt='Popberry'></img>
              </div>
              <div className={`${stylesRoute["rest-energy-text"]}`}>
                0.04%
              </div>
            </div>
          </div>

          <div className={stylesRoute.item}>
            <h3>Cooking</h3>
            <div className={styles["item-table-cooking"]}>
            <div>
              <img className={stylesRoute.icon} src={require("../assets/cooking-icon/omelet-icon.png")} alt='Omelet'></img>
            </div>
            <div>
              <img className={stylesRoute.icon} src={require("../assets/cooking-icon/popberrypie-icon.png")} alt='Popberrypie'></img>
            </div>
              <div className={`${stylesRoute["rest-energy-text"]}`}>
                0.12%
              </div>
              <div className={`${stylesRoute["rest-energy-text"]}`}>
                0.59%
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)
}

export default RecoveryEnergy