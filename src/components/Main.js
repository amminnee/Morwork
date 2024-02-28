import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";

export default function Main() {
    const [currentPage, setPage] = React.useState('home')
    
    return (
        <div className="main-cont">
            <Navbar
                currentPage={currentPage}
                changePage={(newPage) => setPage(newPage)}
            />
            <Feed />
        </div>
    )
}