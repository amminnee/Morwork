import React from "react";

export default function Header(){

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div className="header elevation-1">
            <h1 className="large-title">MorWork</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input placeholder="Search" className="medium-text" />
                <button className="medium-text"><i class="fa-solid fa-magnifying-glass"></i></button>
                <i class="fa-regular fa-message medium-text headerIcon"></i>
                <i class="fa-solid fa-gear headerIcon"></i>
            </form>
        </div>
    
    )
}