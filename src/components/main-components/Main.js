import React from "react";
import Navbar from "../navigation/Navbar";
import Header from "../navigation/Header";
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
        <Header isVisible={!scrolling} searchBar={true} />
        <div className="main-cont">
            <Navbar
                showNewPost={() => setNewPost("")}
                isScrolling={scrolling}
            />
            <Outlet /> 
            <NewPost 
                isVisible={newPost}
                hide={() => setNewPost("hidden")}
            />
        </div>
        </>
    )
}
