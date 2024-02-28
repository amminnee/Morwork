import React from "react";
import NavItem from "./NavItem";
import HomeOutline from '@iconify-icons/teenyicons/home-outline';
import HomeSolid from '@iconify-icons/teenyicons/home-solid';
import MajesticonsSuitcaseLine from '@iconify-icons/majesticons/suitcase-line';
import MajesticonsSuitcase from '@iconify-icons/majesticons/suitcase';
import ZondiconsAddOutline from '@iconify-icons/zondicons/add-outline';
import ZondiconsAddSolid from '@iconify-icons/zondicons/add-solid';
import BxMessage from '@iconify-icons/bx/message';
import BxsMessage from '@iconify-icons/bxs/message';
import MingcuteNotificationLine from '@iconify-icons/mingcute/notification-line';
import MingcuteNotificationFill from '@iconify-icons/mingcute/notification-fill';
import avatar from '../avatar.jfif'

export default function Navbar(props) {

    return (
        <div className="navbar radius elevation-1">
            <NavItem
                name="home"
                text="Home"
                active={props.currentPage==='home' ? true : false}
                icon={props.currentPage==='home' ? HomeSolid : HomeOutline}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="jobs"
                text="Jobs"
                active={props.currentPage==='jobs' ? true : false}
                icon={props.currentPage==='jobs' ? MajesticonsSuitcase : MajesticonsSuitcaseLine}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="post"
                text="Post"
                active={props.currentPage==='post' ? true : false}
                icon={props.currentPage==='post' ? ZondiconsAddSolid : ZondiconsAddOutline}
                handleClick={(newPage) => props.changePage(newPage)}
            />
            <NavItem
                name="messages"
                text="Messages"
                active={props.currentPage==='messages' ? true : false}
                icon={props.currentPage==='messages' ? BxsMessage : BxMessage}
                handleClick={(newPage) => props.changePage(newPage)}
                hidden={true}
            />
            <NavItem
                name="notifications"
                text="Notifications"
                active={props.currentPage==='notifications' ? true : false}
                icon={props.currentPage==='notifications' ? MingcuteNotificationFill : MingcuteNotificationLine}
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