import React from "react";

export default function Header(props){

    function handleSubmit(event){
        event.preventDefault();
    }
    const headerStyle = {
        display: props.isVisible ? "flex" : "none"
    };
    return (
        <div className="header elevation-1" style={headerStyle}>
            <h1 className="large-title">MorWork</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input placeholder="Search" className="medium-text" />
                <button className="medium-text"><i class="fa-solid fa-magnifying-glass"></i></button>
                <i className="fa-regular fa-message medium-text headerIcon"></i>
                <i className="fa-solid fa-gear headerIcon"></i>
            </form>
        </div>
    
    )
}