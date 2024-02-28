import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import SideInfo from "./SideInfo";
import Notification from "./Notification";
import Jobs from "./jobs";
import Header from "./header";


export default function Main() {
    //defines the current page and changes it if needed
    const [currentPage, setPage] = React.useState('home')
    
     
    return (
        <>
        <Header />
        <div className="main-cont">
            <Navbar
                currentPage={currentPage}
                changePage={(newPage) => setPage(newPage)}
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
                currentPage !== "jobs" && 
                <SideInfo />
            }
        </div>
        </>
    )
}
