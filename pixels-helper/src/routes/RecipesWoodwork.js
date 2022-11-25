import React from 'react'
import { recipesWoodworkData } from '../data/recipesWoodworkData';
import Recipes from './Recipes';

function RecipesWoodwork() {
  const sectionName = 
  {
    recipesName: "Woodwork",
    recipesIcon: "woodwork-icon/icon_woodwork.png",
    recipesIconAlt: "Woodwork-icon",

  };

  return (
    <Recipes 
      sectionName={sectionName}
      recipesData={recipesWoodworkData}
    />
  )
}

export default RecipesWoodwork