import React, { Fragment } from 'react'
import { IconContext } from 'react-icons/lib';
import * as SlIcons from "react-icons/sl";
import stylesRoute from "./route.module.css"

function ConsumptionEnergy() {

  // let result = []

  // function itemPropsData (element) {
  //   for (let prop in element) {
  //     if (typeof(element[prop]) == "object") {
  //       itemPropsData(element[prop]);
  //       if(element[prop]["name"]) {
  //         result.push([element[prop]["icon"], element[prop]["energy"]]);

  //         // console.log("prop = " + element[prop]["name"])
  //         // console.log("prop = " + element[prop]["icon"])
  //         // console.log("prop = " + element[prop]["energy"])
  //       }
        

  //     } else {
  //       //console.log(element[prop]);
  //     }
  //   }
  //    return result;
  // }

  //console.log(itemPropsData(ItemData[0]))


  // console.log(Object.entries(ItemData[0]));

  return (
    <>
      <IconContext.Provider value={{ color: "undefined", size: "1.25rem", className: stylesRoute["react-icon"]}}>
        <section className={stylesRoute["section-wrapper"]}>
        <div className={stylesRoute.wrapper}>
          <div className={stylesRoute["wrapper-inner"]}>
            <h2>Requires Energy</h2>
            <div className={stylesRoute.items}>
              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Farming</h3>
                <div className={stylesRoute["item-table-farming"]}>

                  {/* {itemPropsData(ItemData[0]).map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <div>
                          {console.log(item[0])}
                          <img className={stylesRoute.icon} src={require("../assets/" + item[0])} alt='Посадка семян' />
                          <div className={stylesRoute["energy-text"]}>
                            {item[1]}
                          </div>
                        </div>

                      </Fragment>
                    )
                  })} */}

                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/farming-icon/icon_seed_popberry.png")} alt='Popberry seed'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/farming-icon/icon_rustywateringcan.png")} alt='Rusty Watering Can'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/farming-icon/icon_shears.png")} alt='Shears'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/farming-icon/icon-fertilizer.png")} alt='Fertilizer'></img>
                  </div>
                  <div className={stylesRoute["energy-text"]}>
                    2<SlIcons.SlEnergy />
                  </div>
                  <div className={stylesRoute["energy-text"]}>
                    0.5<SlIcons.SlEnergy />
                  </div>
                  <div className={stylesRoute["energy-text"]}>
                    0.1%<SlIcons.SlEnergy />
                  </div>
                  <div className={stylesRoute["energy-text"]}>
                    0.05%<SlIcons.SlEnergy />
                  </div>
                  <div>
                    <img className={`${stylesRoute.icon} ${stylesRoute["icon-margin"]}`} src={require("../assets/farming-icon/itm_popberry.png")} alt='Popberry' />
                    <div className={stylesRoute["sum-icon-alt"]}>=</div>
                  </div>
                  <div className={stylesRoute["sum-energy-text"]}>
                    0.35%
                  </div>
                  <div>
                    <div className={stylesRoute["sum-icon-alt"]}>+</div>
                    <img className={`${stylesRoute.icon} ${stylesRoute["icon-margin"]}`} src={require("../assets/farming-icon/icon-fertilizer.png")} alt='Fertilizer'></img>
                    <div className={stylesRoute["sum-icon-alt"]}>=</div>
                  </div>
                  <div className={stylesRoute["sum-energy-text"]}>
                    0.4%
                  </div>
                </div>
              </div> 

              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Cooking</h3>
                <div className={stylesRoute["item-table-cooking"]}>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/cooking-icon/omelet-icon.png")} alt='Omelet'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/cooking-icon/popberrypie-icon.png")} alt='Popberrypie'></img>
                  </div>
                  <div className={`${stylesRoute["energy-text"]} ${stylesRoute["cooking-box1"]}`}>
                    0%
                  </div>
                </div>
              </div>

              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Woodwork</h3>
                <div className={stylesRoute["item-table-woodwork"]}>
                  <div>
                    <img src={require("../assets/woodwork-icon/fallen_log-icon.png")} alt='Fallen Log'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/woodwork-icon/stick-icon.png")} alt='Stick'></img>
                  </div>
                  <div>
                    <img className={stylesRoute["woodwork-box2"]} src={require("../assets/woodwork-icon/wooden_stool-icon.png")} alt='Wooden Stool'></img>
                  </div>
                  <div className={`${stylesRoute["energy-text"]} ${stylesRoute["woodwork-box3"]}`}>
                    0.1%
                  </div>
                </div>
              </div>

              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Granger</h3>
                <div className={stylesRoute["item-table-granger"]}>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/granger-icon/flour-icon.png")} alt='Flour'></img>
                  </div>
                  <div className={`${stylesRoute["energy-text"]}`}>
                    0.2%
                  </div>
                </div>
              </div>

              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Forestry</h3>
                <div className={stylesRoute["item-table-forestry"]}>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/forestry-icon/axe-icon.png")} alt='Axe'></img>
                  </div>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/forestry-icon/softwood-icon.png")} alt='Softwood'></img>
                  </div>
                  <div className={`${stylesRoute["energy-text"]}`}>
                    0.1%
                  </div>
                  <div className={`${stylesRoute["sum-energy-text"]}`}>
                    0.4-0.5%
                  </div>
                </div>
              </div>

              <div className={stylesRoute.item}>
                <h3 className={stylesRoute["item-header"]}>Aviculture</h3>
                <div className={stylesRoute["item-table-aviculture"]}>
                  <div>
                    <img className={stylesRoute.icon} src={require("../assets/aviculture-icon/egg-icon.png")} alt='Egg'></img>
                  </div>
                  <div className={`${stylesRoute["energy-text"]}`}>
                    0.1%
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>
      </IconContext.Provider>
    </>
  )
}

export default ConsumptionEnergy