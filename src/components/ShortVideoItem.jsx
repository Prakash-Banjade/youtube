import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";

const ShortVideoItem = ({
  src,
  poster,
  preload,
  play,
  currentDivIndex,
  id,
  channelName,
}) => {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("loadedmetadata", () => {
      setDuration(video.duration);
    });
  }, []);

  const location = useLocation();
  const handleLoadedData = () => {
    if (play) {
      videoRef.current.play();
      console.log("played");
    } else {
      videoRef.current.pause();
      console.log("paused");
    }
  };

  //   useEffect(() => {
  //     // if (!autoplay) videoRef.current.pause();
  //     console.log(currentDivIndex);
  //   }, [currentDivIndex]);

  const handleClick = (e) => {
    if (e.target.paused) {
      e.target.play();
      return;
    }
    e.target.pause();
  };

  return (
    <>
      <div className="shortVideoItem">
        <video
          ref={videoRef}
          className="shortVideos"
          src={src}
          poster={poster}
          // controls
          onClick={handleClick}
          onLoadedData={handleLoadedData}
          // autoPlay={autoplay}
          preload={preload}
          loop
        />
        <div className="video-progress_bar">
          <ProgressBar
            videoRef={videoRef}
            duration={duration}
            setDuration={setDuration}
          />
        </div>

        <div className="video-details">
          <div className="channelName">
            {channelName}
            <img src={poster} alt="channel-logo" />
          </div>
          <div className="subscribe-btn" >
            <p onClick={(e)=>{
            e.target.parentElement.classList.toggle('subscribed')
            console.log('clicked')
          }}>Subscribe</p>
          </div>
        </div>

        <div className="video-interactions">
          <Tooltip disableInteractive title="I like this" placement="left">
            <div
              className="interaction like"
              onClick={() => {
                setLiked((prev) => !prev);
                setDisLiked(false);
              }}
            >
              <div
                className="icon"
                style={{
                  background: !liked
                    ? "var(--dark-light)"
                    : "var(--text-color)",
                }}
              >
                <ThumbUpIcon sx={{ color: liked ? "var(--dark)" : "white" }} />
              </div>
              <p className="detail">{String(id).slice(0, 3)}K</p>
            </div>
          </Tooltip>

          <Tooltip disableInteractive title="I dislike this" placement="left">
            <div
              className="interaction like"
              onClick={() => {
                setLiked(false);
                setDisLiked((prev) => !prev);
              }}
            >
              <div
                className="icon"
                style={{
                  background: !disLiked
                    ? "var(--dark-light)"
                    : "var(--text-color)",
                }}
              >
                <ThumbDownIcon
                  sx={{ color: disLiked ? "var(--dark)" : "white" }}
                />
              </div>
              <p className="detail">Dislike</p>
            </div>
          </Tooltip>

          <Tooltip disableInteractive title="Comments" placement="left">
            <div className="interaction comment">
              <div className="icon">
                <CommentIcon />
              </div>
              <p className="detail">
                {String((40 / 100) * Number(id)).slice(0, 2)}K
              </p>
            </div>
          </Tooltip>

          <Tooltip disableInteractive title="Share" placement="left">
            <div className="interaction share">
              <div
                className="icon"
                style={{
                  transformOrigin: "center",
                  transform: "rotateX(180deg)",
                }}
              >
                <ReplyIcon />
              </div>
              <p className="detail">Share</p>
            </div>
          </Tooltip>

          <div className="interaction more">
            <div className="icon">
              <MoreHorizIcon />
            </div>
            <p className="detail"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortVideoItem;
