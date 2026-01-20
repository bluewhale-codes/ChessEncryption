import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router";
import './index.css'
import Home from "./components/Home";
import Layout from "./components/Layout";
import ChessCryptFileTool from './pages/ChessCryptFileTool'
import ChessVisualizer from './pages/ChessVisualizer'
import Team from "./components/Team";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/encrypt' element={<ChessCryptFileTool/>}/>
        <Route path='/visualizer' element={<ChessVisualizer/>}/>
        <Route path='/our-team' element={<Team/>}/>
      </Route>
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router}/>
);