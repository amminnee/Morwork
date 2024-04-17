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


export default function UserProfile(props) {
    // 0 for profile and 1 for posts
    const [currentTab, setCurrentTab] = useState(parseInt(localStorage.getItem("currentTab")) || 0)
    const [isLoading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [posts, setPosts] = useState([])



    const {userId} = useParams()

    const changeTab = (tab) => {
        localStorage.setItem("currentTab", tab)
        setCurrentTab(tab)
    }

    useEffect(() => {
        const getProfile = async () => {
            const response = await userProfile(userId)
            setUserData(response.data)
            setLoading(false)
        }
        getProfile()
    }, [])

    console.log(userData)

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
                            <img src={userData.profilePicture} className="avatar" />
                        }
                        
                        { !isLoading &&
                            <div className="edit-button">
                                <Icon icon="material-symbols:edit-outline" />
                            </div>
                        }
                        
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
                            { !isLoading &&
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
                            { !isLoading &&
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
                            { !isLoading &&
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
                            { !isLoading &&
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
                                post => post.type === "STANDART_POST" ?
                                <Post
                                    key={post.id}
                                    username={`${post.firstName} ${post.lastName}`}
                                    title={post.title}
                                    time={formatPostTime(post.date)}
                                    text={post.content}
                                    photo={post.image}
                                    likes={post.likes}
                                    comments={post.comments}
                                    id={post.id}
                                    user={post.userId}
                                    saves={post.saves}
                                    reposts={post.reposts}
                                    postType={post.type}
                                />
                                :
                                <Post
                                    key={post.id}
                                    username={`${post.firstName} ${post.lastName}`}
                                    title={post.title}
                                    time={formatPostTime(post.date)}
                                    text={post.originalPost.content}
                                    photo={post.originalPost.image}
                                    //likes={post.likes}
                                    comments={post.comments}
                                    id={post.id}
                                    user={post.userId}
                                    saves={post.saves}
                                    originalPost={post.originalPost}
                                    originalUserName={`${post.originalPost.firstName} ${post.originalPost.lastName}`}
                                    reposts={post.reposts}
                                    postType={post.type}
                                />
                                
                            )}
                        </>
                    }
                    
                    
                </div>
                
            </div>
        </div>
    )
}