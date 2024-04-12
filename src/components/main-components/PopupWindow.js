import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function PopupWindow(props){

    return(
        <div className={`darkBackground ${props.isVisible}`} onClick={props.hide}>
            <div className="new-post-content elevation-5 radius" onClick={(event) => event.stopPropagation()}>
                <div className="new-post-header">
                    <h1 className="large-title">props.title</h1>
                    <IconButton onClick={props.hide}>
                        <Close />
                    </IconButton>
                </div>
                 
            </div>
        </div>
    )
}

