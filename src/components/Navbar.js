import React from "react";
import NavItem from "./NavItem";
import avatar from '../avatar.jfif'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {

    return (
        <div>
            <div className="navbar radius elevation-1">
                <NavItem
                    url=""
                    text="Home"
                    line="mingcute:home-4-line"
                    fill="mingcute:home-4-fill"
                />
                <NavItem
                    url="jobs"
                    text="Jobs"
                    line="majesticons:suitcase-line"
                    fill="majesticons:suitcase"
                />
                <NavItem
                    url="post"
                    text="Post"
                    line="zondicons:add-outline"
                    fill="zondicons:add-solid"
                />
                <NavItem
                    url="messages"
                    text="Messages"
                    line="mingcute:message-2-line"
                    fill="mingcute:message-2-fill"
                />
                <NavItem
                    url="notifications"
                    text="Notifications"
                    line="mingcute:notification-line"
                    fill="mingcute:notification-fill"
                />
                <NavItem
                    url="profile"
                    text="Profile"
                    img={avatar}
                />
            </div>
        </div>
        
    )
}