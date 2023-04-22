import React from "react";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import {Counter} from "./Counter"
import { NotFound } from "./NotFound";


export function App(){
 
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="users" element={<GithubUserList />}>
                    <Route path=":username" element={<GithubUser />}></Route>
                </Route>
                <Route path="/counter" element={<Counter />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
      
   )
}

