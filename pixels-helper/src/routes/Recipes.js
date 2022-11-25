import React, { useState } from 'react';
import styles from "./recipes.module.css";
import RecipesLeftPage from './RecipesLeftPage';
import RecipesRightPage from './RecipesRightPage';

function Recipes(props) {

  let [activateRightPage, setActivateRightPage] = useState(false);

  const switchRecipesHandler = (event) => {
    let li = event.target.closest("li");
    if (!li) return;

    setActivateRightPage(li.id);
  };

  const showClearRightPage = () => {
    return (
      <div className={styles["right-page-body-area"]}>
      </div>
    )
  };
  
  //Отображение правой страницы с описанием рецепта и количеством ингредиентов
  const showContentRightPage = () => {
    let recipeSelection;
    props.recipesData.forEach((item, index) => {
      if (item.id === activateRightPage) return recipeSelection = index;
    });
    // console.log(recipeSelection);    

    //Отображение на правой странице описательной части и необходимое количества ингредиентов
    return (
      <RecipesRightPage 
        recipesData = {props.recipesData}
        recipeSelection = {recipeSelection}
      />
    )
  }

  return (
    <RecipesLeftPage 
      sectionName={props.sectionName}
      switchRecipesHandler = {switchRecipesHandler}
      recipesData = {props.recipesData}
      showContentRightPage = {showContentRightPage}
      showClearRightPage = {showClearRightPage}
      activateRightPage = {activateRightPage}
    />
  )
}

export default Recipes