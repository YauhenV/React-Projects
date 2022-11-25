import React from 'react'
import { recipesGrangerData } from '../data/recipesGrangerData';
import Recipes from './Recipes';

function RecipesGranger() {
  const sectionName = 
  {
    recipesName: "Granger",
    recipesIcon: "granger-icon/icon_granger.png",
    recipesIconAlt: "Granger-icon",

  };

  return (
    <Recipes 
      sectionName={sectionName}
      recipesData={recipesGrangerData}
    />
  )
}

export default RecipesGranger