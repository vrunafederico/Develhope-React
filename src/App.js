import React from "react";
import { GithubUser } from "./GithubUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import {Counter} from "./Counter"


export function App(){
 
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users/:username" element={<GithubUser />}></Route>
                <Route path="/counter" element={<Counter />}></Route>
            </Routes>
        </BrowserRouter>
      
   )
}

