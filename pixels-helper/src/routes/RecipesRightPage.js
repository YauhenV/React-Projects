import React from 'react';
import styles from "./recipes.module.css";

function RecipesRightPage(props) {

  const recipesSeveralItemsNeeded = () => {
    //Отображение на правой странице количества ингредиентов
    if (props.recipesData[props.recipeSelection].needItems > 1) {
      return (
        props.recipesData[props.recipeSelection].needItemIcon.map((item, index) => {
          return (
            <div className={styles["right-page-body-footer-item-area"]} key={Math.random()}>
              <div className={styles["right-page-body-footer-item"]} >
                <div className={styles["right-page-body-footer-item-content"]}>
                  <div className={styles["right-page-body-footer-item-img"]}>
                    <img src={require("../assets/" + props.recipesData[props.recipeSelection].needItemIcon[index])} alt={props.recipesData[props.recipeSelection].needItemAlt[index]} />
                  </div>
                  <div className={styles["right-page-body-footer-item-amount-number"]}>
                    {props.recipesData[props.recipeSelection].needItemAmount[index]}
                  </div>
                </div>
              </div>
              {(index < props.recipesData[props.recipeSelection].needItemIcon.length - 1) && (
                  <img src={require("../assets/recipes/crafting_icon_material_plus.png")} width="20" height="18" className={styles["right-page-body-footer-item-area-plus"]} alt="Plus"></img>
                )
              }
            </div>
            )
          })
      )
    } else {
      return (
        <div className={styles["right-page-body-footer-item-area"]}>
          <div className={styles["right-page-body-footer-item"]}>
            <div className={styles["right-page-body-footer-item-content"]}>
              <div className={styles["right-page-body-footer-item-img"]}>
                <img src={require("../assets/" + props.recipesData[props.recipeSelection].needItemIcon)} alt={props.recipesData[props.recipeSelection].needItemAlt} />
              </div>
              <div className={styles["right-page-body-footer-item-amount-number"]}>
                {props.recipesData[props.recipeSelection].needItemAmount}
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    //Отображение на правой странице описательной части
    <div className={styles["right-page-body-area-activate"]}>
      <div className={styles["right-page-body-header"]}>
        <div className={styles["right-page-body-header-title-area"]}>
          <div className={styles["right-page-body-header-title-icon"]}>
            <img src={require("../assets/" + props.recipesData[props.recipeSelection].icon)} height="44" alt="Plain Omelet" />
          </div>
          <div className={styles["right-page-body-header-title"]}>
            <div className={styles["right-page-body-header-title-text"]}>
              {props.recipesData[props.recipeSelection].name}
            </div>
          </div>
        </div>
        <div className={styles["right-page-body-header-body-area"]}>
          <div className={styles["right-page-body-header-body-items"]}>
            <div className={styles["right-page-body-header-body-item-text"]}>
              Craft Time
            </div>
            <div className={styles["right-page-body-header-body-item-text"]}>
              Experience
            </div>
            <div className={styles["right-page-body-header-body-item-text"]}>
              Price
            </div>
          </div>
          <div className={styles["right-page-body-header-body-items"]}>
            <div className={styles["right-page-body-header-body-item-field"]}> 
              {props.recipesData[props.recipeSelection].craftTime}
            </div>
            <div className={`${styles["right-page-body-header-body-item-field"]} ${styles["experience-text"]}`}> 
              {props.recipesData[props.recipeSelection].experience} XP
            </div>
            <div className={styles["right-page-body-header-body-item-field"]}> 
              {props.recipesData[props.recipeSelection].price} <img src={require("../assets/berry-coin.png")} width="16px" height="16px" alt='Berry Coin' />
            </div>
          </div>
        </div>

        {/* <div className={styles["right-page-body-header-body-area"]}>
          <div className={styles["right-page-body-header-body-items"]}>
            <div className={styles["right-page-body-header-body-item-text"]}>
              Craft Time
            </div>
            <div className={styles["right-page-body-header-body-item-field"]}> 
              {props.recipesData[props.recipeSelection].craftTime}
            </div>
          </div>
        </div>
       */}

      </div>
      <div className={styles["right-page-body-main"]}>
        <div className={styles["right-page-body-main-text"]}>
        {props.recipesData[props.recipeSelection].text}
        </div>
      </div>
      <div className={styles["right-page-body-footer"]}>
        <div className={styles["right-page-body-footer-title-area"]}>
          <div className={styles["right-page-body-footer-title"]}>
            Required Items
          </div>
        </div>
        <div className={styles["right-page-body-footer-items"]}>
          {recipesSeveralItemsNeeded()}
        </div>
      </div>
    </div>
  )
}

export default RecipesRightPage