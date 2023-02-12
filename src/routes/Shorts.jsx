import React, { useState, useContext, useRef, useEffect } from "react";
import { VideosContext } from "../GetVideos";

import "../css/Shorts.scss";
import useVideoSearch from "../useVideoSearch";
import ShortVideoItem from "../components/ShortVideoItem";



const Shorts = () => {
  const { query, page } = useContext(VideosContext);
  const { result } = useVideoSearch(query, page, "portrait");
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchMoveY, setTouchMoveY] = useState(0);

  const divs = result.map((video, index) => {
    return (
      <ShortVideoItem
        key={video.id}
        src={video.video_files[2].link}
        poster={video.image}
        preload={currentDivIndex === index ? "auto" : "none"}
        play={currentDivIndex === index ? true : false}
        currentDivIndex={currentDivIndex}
        id={video.id}
        channelName={video.user.name}
      />
    );
  });

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      navigate(event.key === "ArrowDown" ? 1 : -1);
    }
  };

  const navigate = (direction) => {
    const nextIndex = currentDivIndex + direction;
    if (nextIndex >= 0 && nextIndex < divs.length) {
      setCurrentDivIndex(nextIndex);
    }
  };

  const handleTouchStart = (event) => {
    if (touchStartY === 0) {
      setTouchStartY(event.touches[0].clientY);
    }
  };

  const handleTouchMove = (event) => {
    setTouchMoveY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    if (touchMoveY === 0) {
      setTouchStartY(0);
      setTouchMoveY(0);
      return;
    }

    const nextIndex = currentDivIndex + (touchMoveY - touchStartY > 0 ? -1 : 1);
    if (nextIndex >= 0 && nextIndex < divs.length) {
      setCurrentDivIndex(nextIndex);
      setTimeout(() => {
        setSlideClass("");
      }, 500);
      setSlideClass(touchMoveY - touchStartY > 0 ? "slide-up" : "slide-down");
    }
    setTouchStartY(0);
    setTouchMoveY(0);
  };

  return (
    <div style={{ position: "relative" }}>
      {divs.map((div, index) => (
        <div
          key={index}
          className={`slide-container ${
            index === currentDivIndex ? "" : "hidden"
          } ${index === currentDivIndex ? slideClass : ""}`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100vh - 55px)",
            transition: "transform 0.5s ease-out",
            transform: `translateY(${
              index === currentDivIndex
                ? 0
                : index < currentDivIndex
                ? "-100vh"
                : "100vh"
            })`,
          }}
        >
          {div}
        </div>
      ))}
    </div>
  );
};

export default Shorts;
