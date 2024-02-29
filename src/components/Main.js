import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import SideInfo from "./SideInfo";
import Notification from "./Notification";
import Jobs from "./jobs";
import Header from "./header";


export default function Main() {
    //defines the current page and changes it if needed
    const [currentPage, setPage] = React.useState(localStorage.getItem('page') || 'home')
    // this function is used to keep the same page after reload
    const changePage = (page) => {
        localStorage.setItem('page', page)
        setPage(page)
    }
    
     
    return (
        <>
        <Header />
        <div className="main-cont">
            <Navbar
                currentPage={currentPage}
                changePage={(newPage) => changePage(newPage)}
            />
            {currentPage === "home" && <Feed />}
            {
                currentPage === "notifications" && 
                <Notification />
            }
            {
                currentPage === "jobs" && 
                <Jobs />
            }
        
            {
                currentPage === "home" && 
                <SideInfo />
            }
        </div>
        </>
    )
}
