import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import SideInfo from "./SideInfo";
import Notification from "./Notification";
import Jobs from "./jobs";
import Header from "./header";
import NewPost from "./NewPost";


export default function Main() {
    //defines the current page and changes it if needed
    const [currentPage, setPage] = React.useState(localStorage.getItem('page') || 'home')
    // this function is used to keep the same page after reload
    const changePage = (page) => {
        localStorage.setItem('page', page)
        setPage(page)
    }

    const [isNewPostOpen, setIsNewPostOpen] = React.useState(false)

    function handleNewPost(){
        setIsNewPostOpen(!isNewPostOpen)
        const prevPage = currentPage;
        if(!isNewPostOpen){
            setPage(prevPage)
        }
    }
    
     
    return (
        <>
        <Header />
        <div className="main-cont">
            <Navbar
                currentPage={currentPage}
                changePage={(newPage) => changePage(newPage)
                }
                onOpen={handleNewPost}
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
            {
                isNewPostOpen && 
                <NewPost onClose={handleNewPost}/>
            }
        </div>
        </>
    )
}
