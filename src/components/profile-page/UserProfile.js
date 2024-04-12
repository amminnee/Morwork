import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Post from "../post-feed/Post";
import ProfileExp from "./ProfileExp";
import ProfileEdu from "./ProfileEdu";
import Skeleton from "react-loading-skeleton";
import PostSkeleton from "../post-feed/PostSkeleton";
import { userProfile } from "../../api/app";
import { useParams } from "react-router-dom";
import { formatPostTime } from "../post-feed/Feed";
import { Menu, MenuItem } from "@mui/material";


export default function UserProfile(props) {
    // 0 for profile and 1 for posts
    const [currentTab, setCurrentTab] = useState(parseInt(localStorage.getItem("currentTab")) || 0)
    const [isLoading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [isCurrentUser, setCurrentUser] = useState()
    const [profileAnchorEl, setProfileAnchorEl] = useState(null)
    const [coverAnchorEl, setCoverAnchorEl] = useState(null)

    const profileOpen = Boolean(profileAnchorEl)
    const coverOpen = Boolean(coverAnchorEl)

    const {userId} = useParams()

    const changeTab = (tab) => {
        localStorage.setItem("currentTab", tab)
        setCurrentTab(tab)
    }
    
    const handleClose = () => {
        setProfileAnchorEl(null)
        setCoverAnchorEl(null)
    }

    useEffect(() => {
        const getProfile = async () => {
            const response = await userProfile(userId)
            setUserData(response.data)
            setLoading(false)
        }
        setCurrentUser(() => localStorage.getItem('userId') === userId)
        getProfile()
    }, [])

    return (
        <div className="user-profile-page">
            <div className="user-header radius">
                <div className="cover-cont">
                    <div className="cover-img">
                        { isLoading ?
                            <Skeleton height={240} />
                            :
                            <img src={userData.coverPicture} className="radius" />
                        }
                        
                    </div>
                    <div className="user-profile-cont">
                        { isLoading ?
                            <Skeleton className="avatar" />
                            :
                            <div className="avatar cont">
                                <img src={userData.profilePicture} className="avatar" />
                                {
                                    isCurrentUser &&
                                    <div className="edit-button profile" onClick={(event) => setProfileAnchorEl(event.currentTarget)}>
                                        <Icon icon="material-symbols:edit-outline" />
                                    </div>
                                }
                                <Menu
                                    id="profile-menu"
                                    anchorEl={profileAnchorEl}
                                    open={profileOpen}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem>Change profile picture</MenuItem>
                                    <MenuItem>Delete profile picture</MenuItem>
                                </Menu>
                            </div>
                        }
                        
                        { !isLoading && isCurrentUser &&
                            <div className="edit-button" onClick={(event) => setCoverAnchorEl(event.currentTarget)} >
                                <Icon icon="material-symbols:edit-outline" />
                            </div>
                        }
                        <Menu
                            id="cover-menu"
                            anchorEl={coverAnchorEl}
                            open={coverOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem>Change cover picture</MenuItem>
                            <MenuItem>Delete cover picture</MenuItem>
                        </Menu>
                        
                    </div>
                </div>
                <div className="user-info">
                    <div className="flex">
                        <div className="flex">
                            { isLoading ?
                                <Skeleton height={30} width={150} />
                                :
                                <p className="medium-title">{userData.firstName} {userData.lastName}</p>
                            }
                            { isLoading ?
                                <Skeleton height={10} width={180} />
                                :
                                <p className="medium-label">{userData.title}</p>
                            }
                            
                        </div>
                        { isLoading ?
                                <Skeleton className="primary-button" height={20} width={80} />
                                :
                                <p className="primary-button">{userData.followersNum} follower</p>
                        }
                        
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
                            { isLoading ?
                                <Skeleton className="primary-button" height={30} width={100} />
                                :
                                <p className="large-title">About</p>
                            }
                            { !isLoading && isCurrentUser &&
                                <Icon className="icon" icon="material-symbols:edit-outline" />
                            }
                            
                        </div>

                        <div className="section-content">
                            { isLoading ?
                                <Skeleton className="primary-button" height={15} count={6} />
                                :
                                <p className="normal-text">
                                    {userData.about}
                                </p>
                            }
                            
                        </div>
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            { isLoading ?
                                <Skeleton className="primary-button" height={30} width={100} />
                                :
                                <p className="large-title">Experiences</p>
                            }
                            { !isLoading && isCurrentUser &&
                                <div className="icons-cont">
                                    <Icon className="icon" icon="ic:baseline-plus" />
                                    <Icon className="icon" icon="material-symbols:edit-outline" />
                                </div>
                            }
                            
                        </div>
                        { isLoading ?
                            <div className="section-content">
                                <ProfileExp isLoading={isLoading} />
                                <ProfileExp isLoading={isLoading} />
                                <ProfileExp isLoading={isLoading} />
                            </div>
                            :
                            <div className="section-content">
                                {userData.experiences.map(
                                    experience => <ProfileExp {...experience} />
                                )}
                            </div>
                        }
                        
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            { isLoading ?
                                <Skeleton className="primary-button" height={30} width={100} />
                                :
                                <p className="large-title">Education</p>
                            }
                            { !isLoading && isCurrentUser &&
                                <div className="icons-cont">
                                    <Icon className="icon" icon="ic:baseline-plus" />
                                    <Icon className="icon" icon="material-symbols:edit-outline" />
                                </div>
                            }
                            
                        </div>
                        { isLoading ?
                            <div className="section-content">
                                <ProfileEdu isLoading={isLoading} />
                                <ProfileEdu isLoading={isLoading} />
                            </div>
                            :
                            <div className="section-content">
                                {userData.education.map(
                                    edu => <ProfileEdu {...edu} />
                                )}
                            </div>
                        }
                        
                    </div>

                    <div className="user-profile-section radius">
                        <div className="title-cont">
                            { isLoading ?
                                <Skeleton className="primary-button" height={30} width={100} />
                                :
                                <p className="large-title">Skills</p>
                            }
                            { !isLoading && isCurrentUser &&
                                <div className="icons-cont">
                                    <Icon className="icon" icon="ic:baseline-plus" />
                                    <Icon className="icon" icon="material-symbols:edit-outline" />
                                </div>
                            }
                            
                        </div>
                        { isLoading ?
                            <div className="section-content">
                                <Skeleton  width={160} height={15} count={4} />
                            </div>
                            
                            :
                            <div className="section-content">
                                {userData.skills.map(
                                    skill => <p className="small-title skill">{skill.name}</p>
                                )}
                            </div>
                        }
                        
                    </div>
                </div>



                <div className={`posts-feed ${currentTab && "show"}`}>
                    { isLoading ?
                        <>
                            <PostSkeleton />
                            <PostSkeleton />
                            <PostSkeleton /> 
                        </>
                        
                        :
                        <>
                            {userData.posts.map(
                                post => <Post 
                                    key={post.id}
                                    username={`${userData.firstName} ${userData.lastName}`}
                                    title={userData.title}
                                    time={formatPostTime(post.date)}
                                    text={post.content}
                                    photo={post.image}
                                    likes={post.likes}
                                    comments={post.comments}
                                    id={post.id}
                                    user={post.userId}
                                />
                            )}
                        </>
                    }
                    
                    
                </div>
                
            </div>
        </div>
    )
}