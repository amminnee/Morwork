import React from "react";


export default function NewPost(props){

    return(
        <div className={`darkBackground ${props.isVisible}`} onClick={props.hide}>
            <div className="new-post-content elevation-5 radius" onClick={(event) => event.stopPropagation()}>
                <div className="new-post-header">
                    <h1 className="large-title">New Post</h1>
                    <i class="fa-solid fa-xmark" onClick={props.hide}></i>
                </div>
                <form>
                    <div className="">
                        <textarea className="large-text" placeholder="What the hell do you want to talk about?">
                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="file"><i class="fa-solid fa-file"></i></label>
                        <input type="file" id="file"/>
                    </div>
                    <div>
                        <button className="on-button radius">Poster</button>
                    </div>
                </form>
            </div>
        </div>
    )
}