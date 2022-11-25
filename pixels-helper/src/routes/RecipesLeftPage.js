import React from 'react'
import styles from "./recipes.module.css";

function RecipesLeftPage(props) {
  return (
    <section className={styles["section-wrapper"]}>
      <div className={styles.wrapper}>
        <div className={styles["wrapper-inner"]}>

          <div className={styles.binding}>
          </div>
          <div className={styles["main-page"]}>
            <div className={styles.pages}>
              <div className={styles["left-page"]}>
                <div className={styles["left-page-inner"]}>
                  <div className={styles["left-page-header"]}>
                    <div className={styles["left-page-header-title-area"]}>
                      <div className={styles["left-page-header-title-icon"]}>
                        <img src={require("../assets/" + props.sectionName.recipesIcon)} width="32px" height="32px" className={styles["left-page-header-title-icon-img"]} alt={props.sectionName.recipesIconAlt}></img>
                      </div>
                      <div className={styles["left-page-header-title"]}>
                        <div className={styles["left-page-header-title-text"]}>
                          {props.sectionName.recipesName}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles["left-page-body"]}>
                    <div className={styles["left-page-body-area"]}>
                      <div className={styles["left-page-body-title-area"]}>
                        <div className={styles[".left-page-body-title"]}>
                          Recipes
                        </div>
                      </div>
                      <ul className={styles["body-list"]} onClick={props.switchRecipesHandler}>

                        {props.recipesData.map(item => {
                          return (
                            <li className={styles["body-list-item"]} id={item.id} key={item.id}>
                              <div className={styles["body-list-item-text-area"]}>
                                <span className={styles["body-list-item-text"]}>
                                  {item.name}
                                </span>
                              </div>
                            </li>
                          )
                        })}

                      </ul> 
                    </div>

                  </div>
                </div>
              </div>
              <div className={styles["right-page"]}>
                <div className={styles["right-page-inner"]}>
                  <div className={styles["right-page-body"]}>
                    {(props.activateRightPage === false || props.activateRightPage === "") ? props.showClearRightPage() : props.showContentRightPage()}
                      
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default RecipesLeftPage