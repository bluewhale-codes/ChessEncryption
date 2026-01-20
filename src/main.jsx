import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router";
import './index.css'
import Home from "./components/Home";
import Layout from "./components/Layout";
import ChessCryptFileTool from './pages/ChessCryptFileTool'
import ChessVisualizer from './pages/ChessVisualizer'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/encrypt' element={<ChessCryptFileTool/>}/>
        <Route path='/visualizer' element={<ChessVisualizer/>}/>
      </Route>
    )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router}/>
);