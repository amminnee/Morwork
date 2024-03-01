import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import NewPost from "./NewPost";

export default function Main() {
    // this state decides weither the newPost window is visible
    const [newPost, setNewPost] = React.useState("hidden")

    return (
        <>
        <Header />
        <div className="main-cont">
            <Navbar
                showNewPost={() => setNewPost("")}
            />
            <Outlet /> 
            {/* // outlet is the component that gets loaded based on url path defined in route (look in App.js) */}
            <NewPost 
                isVisible={newPost}
                hide={() => setNewPost("hidden")}
            />
        </div>
        </>
    )
}
