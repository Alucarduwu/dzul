import React from "react";
import Menu from "./Menu";  
import Example from "./Example";
import ListCard from "./ListCard";
import ListProduct from "./ListProduct";
import {Routes,Route,Navigate} from "react-router-dom";
import Call_ListProducts from "./Call_ListProduct";
import Call_ListCards from "./Call_ListCard";
import Login from "./Login";
import About from "./About";





function Main()
{
    return(
        <Routes>
            <Route path="/any/public/"
            element={<Menu/>}>
                
                <Route path="example" element={<Example/> }/>
                <Route path="listcard" element={<ListCard/> }/>
                <Route path="listproduct" element={<ListProduct/> }/>
                <Route path="call_listcard" element={<Call_ListCards/>}/>
                <Route path="call_listproduct" element={<Call_ListProducts/>}/>
                <Route path="login" element={<Login/>}/> 
                <Route path="About" element={<About/>}/> 
                
                <Route element={<Navigate replace to="/any/public/"/> }/>
                
        

            </Route>
        </Routes>
    )
}

export default Main 