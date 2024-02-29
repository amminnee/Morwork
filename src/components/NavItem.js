import React from "react"
import { Icon } from '@iconify/react';
import { NavLink, useLocation } from "react-router-dom";

export default function NavItem(props) {
    const path = useLocation().pathname
    const active = (path===`/${props.url}`)
    console.log(active)

    return (
        <NavLink to={`/${props.url}`} className={`nav-item ${({isActive}) => (
            isActive && 'active'
        )} ${props.hidden && 'hidden'}`}>
                {props.fill && <Icon    
                    icon={active ? props.fill : props.line} 
                    className="icon" 
                />}
                {props.img && <img src={props.img} className="avatar" />}
                <p className="medium-text">{props.text}</p>
        </NavLink>
        
    )
}