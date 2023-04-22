import React from "react";
import { GithubUser } from "./GithubUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";


export function App(){
 
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users/:username" element={<GithubUser />}></Route>
            </Routes>
        </BrowserRouter>
      
   )
}

