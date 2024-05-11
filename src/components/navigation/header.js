import React from "react";
import { Link } from "react-router-dom";

export default function Header(props){

    function handleSubmit(event){
        event.preventDefault();
    }
    const headerStyle = {
        display: props.isVisible ? "flex" : "none"
    };
    return (
        <div className="header elevation-1" style={headerStyle}>
            <Link className="link" to="/">
                <h1 className="large-title">MorWork</h1>
            </Link>
            
            <form className="search-form" onSubmit={handleSubmit}>
                <input placeholder="Search" className="medium-text" />
                <button className="medium-text"><i class="fa-solid fa-magnifying-glass"></i></button>
                <i className="fa-regular fa-message medium-text headerIcon"></i>
                <i className="fa-solid fa-gear headerIcon"></i>
            </form>
        
        </div>
    
    )
}