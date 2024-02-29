import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Main() {
 
    return (
        <>
        <Header />
        <div className="main-cont">
            <Navbar/>
            <Outlet /> // outlet is the component that gets loaded based on url path defined in route (look in App.js)
        </div>
        </>
    )
}
