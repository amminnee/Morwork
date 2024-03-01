import React from "react"
import { Icon } from '@iconify/react';
import { NavLink, useLocation } from "react-router-dom";

export default function NavItem(props) {
    const path = useLocation().pathname
    const active = (path===props.url && props.text!=="Post")
    console.log(active)

    return (
        <NavLink to={props.url} className={`nav-item ${({isActive}) => (
            isActive && props.text!=="Post" && 'active'
        )} ${props.hidden && 'hidden'}`} onClick={props.show}>
                {props.fill && <Icon    
                    icon={active ? props.fill : props.line} 
                    className="icon" 
                />}
                {props.img && <img src={props.img} className="avatar" />}
                <p className="medium-text">{props.text}</p>
        </NavLink>
        
    )
}