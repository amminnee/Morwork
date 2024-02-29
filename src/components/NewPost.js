import React from "react";


export default function NewPost(props){



    return(
        <div className="darkBackground">
            <div className="new-post-content elevation-1 radius">
                <div className="new-post-header">
                    <h1 className="large-title">New Post</h1>
                    <i class="fa-solid fa-xmark" onClick={props.onClose}></i>
                </div>
                <form>
                    <div className="">
                        <textarea className="large-text" placeholder="What the hell do you want to talk about?">
                        </textarea>
                    </div>
                    <div>
                        <label for="file"><i class="fa-solid fa-file"></i></label>
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