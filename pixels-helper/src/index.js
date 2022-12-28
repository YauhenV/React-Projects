// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import ConsumptionEnergy from "./routes/ConsumptionEnergy"
import RecoveryEnergy from "./routes/RecoveryEnergy";
import RecipesCooking from "./routes/RecipesCooking";
import Calculators from "./routes/Calculators";
import Navbar from "./components/Navbar";
import "./index.css";
import RecipesGranger from "./routes/RecipesGranger";
import RecipesWoodwork from "./routes/RecipesWoodwork";
import Items from "./routes/Items";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element=<ConsumptionEnergy /> />
    <Route path="/recoveryEnergy" element=<RecoveryEnergy /> />
    <Route path="/recipesCooking" element=<RecipesCooking /> />
    <Route path="/recipesWoodwork" element=<RecipesWoodwork /> />
    <Route path="/recipesGranger" element=<RecipesGranger /> />
    <Route path="/items" element=<Items /> />
    <Route path="/calculators" element=<Calculators /> />
  </Route>
))
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Info />,
//       },
//       {
//         path: "calculators",
//         element: <Calculators />,
//       },
//     ],
//   }
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

