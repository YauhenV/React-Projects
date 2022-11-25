import React from 'react'
import { recipesCookingData } from '../data/recipesCookingData';
import Recipes from './Recipes';

function RecipesCooking() {
  const sectionName = 
  {
    recipesName: "Cooking",
    recipesIcon: "cooking-icon/skills_icon_cooking.png",
    recipesIconAlt: "Cooking-icon",

  };

  return (
    <Recipes 
      sectionName={sectionName}
      recipesData={recipesCookingData}
    />
  )
}

export default RecipesCooking