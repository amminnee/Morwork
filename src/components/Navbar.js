import React from "react";
import NavItem from "./NavItem";
import avatar from '../avatar.jfif'

export default function Navbar(props) {

    return (
        <div className="navbar radius elevation-1">
            <NavItem
                name="home"
                text="Home"
                active={props.currentPage==='home' ? true : false}
                icon={props.currentPage==='home' ? "mingcute:home-4-fill" : "mingcute:home-4-line"}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="jobs"
                text="Jobs"
                active={props.currentPage==='jobs' ? true : false}
                icon={props.currentPage==='jobs' ? "majesticons:suitcase" : "majesticons:suitcase-line"}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="post"
                text="Post"
                active={props.currentPage==='post' ? true : false}
                icon={props.currentPage==='post' ? "zondicons:add-solid" : "zondicons:add-outline"}
                handleClick={(newPage) => props.changePage(newPage)
                }
                onOpen={props.onOpen}
            />
            <NavItem
                name="messages"
                text="Messages"
                active={props.currentPage==='messages' ? true : false}
                icon={props.currentPage==='messages' ? "mingcute:message-2-fill" : "mingcute:message-2-line"}
                handleClick={(newPage) => props.changePage(newPage)}
                hidden={true}
            />
            <NavItem
                name="notifications"
                text="Notifications"
                active={props.currentPage==='notifications' ? true : false}
                icon={props.currentPage==='notifications' ? "mingcute:notification-fill" : "mingcute:notification-line"}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="profile"
                text="Profile"
                active={props.currentPage==='profile' ? true : false}
                handleClick={(newPage) => props.changePage(newPage)}
                img={avatar}
            />
        </div>
    )
}