import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import SideInfo from "./SideInfo";

export default function Main() {
    //defines the current page and changes it if needed
    const [currentPage, setPage] = React.useState('home')

    return (
        <div className="main-cont">
            <Navbar
                currentPage={currentPage}
                changePage={(newPage) => setPage(newPage)}
            />
            <Feed />
            <SideInfo />
        </div>
    )
}
