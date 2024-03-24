import React from "react";
import Navbar from "../navigation/Navbar";
import Header from "../navigation/header";
import { Outlet } from "react-router-dom";
import NewPost from "../post-feed/NewPost";


export default function Main() {
    // this state decides weither the newPost window is visible
    const [newPost, setNewPost] = React.useState("hidden")

    const [scrolling, setScrolling] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setScrolling(prevScrollPos < currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
        <Header isVisible={!scrolling} />
        <div className="main-cont">
            <Navbar
                showNewPost={() => setNewPost("")}
                isScrolling={scrolling}
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
