import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import avatar from "../../elon.jpeg";
import PostInteraction from "./PostInteraction";

export default function Post(props) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CONTENT_LENGTH = 100;
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
      {props.photo && !props.photo.endsWith("mp4") && <img src={`http://localhost:8081/${props.photo}`} className="post-media" alt="Post media" />}
      {props.photo && props.photo.endsWith("mp4") && <video ref={videoRef} src={`http://localhost:8081/${props.photo}`} className="post-media" controls muted></video>}
      <div className="info-section">
        <p className="medium-label">{props.likes} likes</p>
        <p className="medium-label">{props.comments} comments</p>
      </div>
      <div className="interaction-section">
        <PostInteraction icon="bx:like" text="Like" />
        <PostInteraction icon="material-symbols:comment-outline" text="Comment" />
        <PostInteraction icon="zondicons:repost" text="Repost" />
        <PostInteraction icon="ph:share-fat-bold" text="Share" />
        <PostInteraction icon="mingcute:bookmark-line" text="Save" />
      </div>
    </div>
  );
}
