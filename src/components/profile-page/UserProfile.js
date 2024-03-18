import React from "react";
import cover from "../../cybertruck.jpg"
import avatar from "../../avatar.jfif"
import { Icon } from "@iconify/react";
import Post from "../post-feed/Post";
import postPhoto from "../../post-photo.jpg"
import ProfileExp from "./ProfileExp";
import ProfileEdu from "./ProfileEdu";


export default function UserProfile(props) {
    // 0 for profile and 1 for posts
    const [currentTab, setCurrentTab] = React.useState(parseInt(localStorage.getItem("currentTab")) || 0)
    const changeTab = (tab) => {
        localStorage.setItem("currentTab", tab)
        setCurrentTab(tab)
    }

    return (
        <div className="user-profile-page">
            <div className="user-header radius">
                <div className="cover-cont">
                    <div className="cover-img">
                        <img src={cover} className="radius" />
                    </div>
                    <div className="user-profile-cont">
                        <img src={avatar} className="avatar" />
                        <div className="edit-button">
                            <Icon icon="material-symbols:edit-outline" />
                        </div>
                    </div>
                </div>
                <div className="user-info">
                    <div className="flex">
                        <div className="flex">
                            <p className="medium-title">Amine Edarkaoui</p>
                            <p className="medium-label">Software engineering student</p>
                        </div>
                        <p className="primary-button">46 follower</p>
                    </div>
                </div>
            </div>
            

            <div className="details-section">
                <div className="profile-selector">
                    <div className={`item profile ${!currentTab && "on"}`} onClick={() => changeTab(0)}>
                        <p className="small-title">Profile</p>
                    </div>
                    <div className={`item posts ${currentTab && "on"}`} onClick={() => changeTab(1)}>
                        <p className="small-title">Posts</p>
                    </div>
                </div>

                <div className={`user-details ${!currentTab && "show"}`}>
                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            <p className="large-title">About</p>
                            <Icon className="icon" icon="material-symbols:edit-outline" />
                        </div>
                        <div className="section-content">
                            <p className="normal-text">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                            </p>
                        </div>
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            <p className="large-title">Experiences</p>
                            <div className="icons-cont">
                                <Icon className="icon" icon="ic:baseline-plus" />
                                <Icon className="icon" icon="material-symbols:edit-outline" />
                            </div>
                        </div>
                        <div className="section-content">
                            <ProfileExp />
                            <ProfileExp />
                            <ProfileExp />
                        </div>
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            <p className="large-title">Education</p>
                            <div className="icons-cont">
                                <Icon className="icon" icon="ic:baseline-plus" />
                                <Icon className="icon" icon="material-symbols:edit-outline" />
                            </div>
                        </div>
                        <div className="section-content">
                            <ProfileEdu />
                            <ProfileEdu />
                        </div>
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            <p className="large-title">Skills</p>
                            <div className="icons-cont">
                                <Icon className="icon" icon="ic:baseline-plus" />
                                <Icon className="icon" icon="material-symbols:edit-outline" />
                            </div>
                        </div>
                        <div className="section-content">
                            <p className="small-title skill">Java Spring</p>
                            <p className="small-title skill">React JS</p>
                            <p className="small-title skill">Oracle</p>
                        </div>
                    </div>
                </div>



                <div className={`posts-feed ${currentTab && "show"}`}>
                    <Post 
                        username="Amine Edarkaoui"
                        title="Software engineer"
                        time="21h"
                        text="Dear Network I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years. I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                        photo={postPhoto}
                        likes="23"
                        comments="6"
                    />
                    <Post 
                        username="Amine Edarkaoui"
                        title="Software engineer"
                        time="21h"
                        text="Dear Network I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years. I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                        photo={postPhoto}
                        likes="23"
                        comments="6"
                    />
                </div>
                
            </div>
        </div>
    )
}