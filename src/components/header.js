import React from "react";

export default function Header(){

    return (
        <div className="header elevation-1">
            <h1 className="large-title">MorWork</h1>
            <form className="search-form">
                <input placeholder="Search" className="medium-text radius" />
                <button className="medium-text"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    
    )
}