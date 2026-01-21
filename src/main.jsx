import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router";
import './index.css'
import Home from "./components/Home";
import Layout from "./components/Layout";
import ChessCryptFileTool from './pages/ChessCryptFileTool'
import ChessVisualizer from './pages/ChessVisualizer'
import TeamShowCase from './pages/TeamShowCase'
import VisualizationBanner from "./components/Visualization/VisualizationBanner";
import IntroBanner from "./components/Visualization/IntroBanner";


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
  
        <Route path='/encrypt' element={<IntroBanner/>}/>
        <Route path='/encrypt/try' element={<ChessCryptFileTool/>}/>
        <Route path='/visualizer' element={<VisualizationBanner/>}/>
        <Route path='/visualizer/try' element={<ChessVisualizer/>}/>
        <Route path='/our-team' element={<TeamShowCase/>}/>
        
        
      </Route>
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router}/>
);