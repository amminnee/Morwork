import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import avatar from "../../elon.jpeg";
import PostInteraction from "./PostInteraction";
import { getPosts, likePost, getLikes } from "../../api/app";



export default function Post(props) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CONTENT_LENGTH = 100;
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [likeText, setLikeText] = useState("Like")
  const [likesCount, setLikesCount] = useState(0)


  const handleToggleExpansion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (videoRef.current) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 
      };

      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.play().catch(error => console.error("Failed to play video:", error));
            setIsVideoPlaying(true);
          } else if (isVideoPlaying) {
            const video = entry.target;
            video.pause();
            setIsVideoPlaying(false);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, options);

      observer.observe(videoRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [videoRef.current, isVideoPlaying]);



  const handleLikePost = () => {
    likePost(props.id, Number(localStorage.getItem("userId")))
    .then(()=>{
      setLikeText(currentLikeText => currentLikeText === "Like" ? "Liked" : "Like")
      setLikesCount(prevLikesCount => likeText === "Like" ? prevLikesCount + 1 : prevLikesCount - 1);
    })

  }

  useEffect(() => {
    if(likeText ==="liked"){
      test()
    }

    getLikes(props.id)
      .then(res => {
        const userLiked = res.data.some(like => like.userId === Number(localStorage.getItem("userId")));
        console.log(userLiked+"   "+props.id)
        if (userLiked) {
          setLikeText("Liked");
        } else {
          setLikeText("Like");
        }
        setLikesCount(res.data.length)
      })
      .catch(error => {
        console.error("Error fetching likes:", error);
      });
  }, []);
  

  function test(){
    let t;
    props.likes.map(like =>{
      if(like.userId === Number(localStorage.getItem("userId")) && like.postId === props.id){
        t=like.id
        console.log("t= "+t)
      }
    })
  }
  

  return (
    <div className="radius post">
      <div className="top-section">
        <div className="user-profile">
          <img className="avatar" src={avatar} alt="User avatar" />
          <div className="user-info">
            <p className="medium-title">{props.username}</p>
            <p className="medium-label">{props.title}</p>
            <p className="small-label">{props.time}</p>
          </div>
        </div>
        <div className="options">
          <button className="primary-button text-button">Follow</button>
          <Icon icon="tabler:dots" />
        </div>
      </div>
      <div className="text-section">
        <p className="normal-text">
          {props.text && (expanded ? props.text : props.text.slice(0, MAX_CONTENT_LENGTH))}
        </p>
        {props.text && props.text.length > MAX_CONTENT_LENGTH && !expanded && (
          <span className="medium-label" onClick={handleToggleExpansion} style={{ cursor: "pointer" }}> See more</span>
        )}
      </div>
      {props.photo && !props.photo.endsWith("mp4") && <img src={`http://localhost:8081/media/${props.photo}`} className="post-media" alt="Post media" />}
      {props.photo && props.photo.endsWith("mp4") && <video ref={videoRef} src={`http://localhost:8081/${props.photo}`} className="post-media" controls muted></video>}

      <div className="info-section">
        <p className="medium-label">{likesCount} likes</p>
        <p className="medium-label">{props.comments} comments</p>
      </div>
      <div className="interaction-section">
        <PostInteraction icon={likeText === "Liked" ? "bxs:like" : "bx:like"} text={likeText} style={likeText === "Liked" ? { color: "blue"} : null} onClick={handleLikePost} />
        <PostInteraction icon="material-symbols:comment-outline" text="Comment" />
        <PostInteraction icon="zondicons:repost" text="Repost" />
        <PostInteraction icon="ph:share-fat-bold" text="Share" />
        <PostInteraction icon="mingcute:bookmark-line" text="Save" />
      </div>
    </div>
  );
}
