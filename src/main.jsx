import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router";
import './index.css'

// Components import Here from index file
import {  
            Layout,
            Home,
            ChessCryptFileTool,
            ChessVisualizer,
            TeamProfile,
            VisualizationBanner,
            IntroBanner
        } from "./components/index"



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/encrypt' element={<IntroBanner/>}/>
        <Route path='/encrypt/try' element={<ChessCryptFileTool/>}/>
        <Route path='/visualizer' element={<VisualizationBanner/>}/>
        <Route path='/visualizer/try' element={<ChessVisualizer/>}/>
        <Route path='/our-team' element={<TeamProfile/>}/>
      </Route>
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router}/>

);