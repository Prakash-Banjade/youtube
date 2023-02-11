import React, { useState, useEffect, useContext, useRef } from "react";
import { VideosContext } from "../GetVideos";

import "../css/Shorts.scss";
import { useLocation } from "react-router-dom";

const ShortVideoItem = ({ src, poster }) => {
  const videoRef = useRef(null);

  const location = useLocation()
  const handleLoadedData = () => {
    if (location.pathname === "/shorts") videoRef.current.play();
  };
  return (
    <div className="shortVideoItem">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        onLoadedData={handleLoadedData}
        autoPlay
        preload="auto"
      />
    </div>
  );
};

const Shorts = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const { result } = useContext(VideosContext);

  const divs = result.map((video) => {
    return (
      <ShortVideoItem src={video.video_files[2].link} poster={video.image} />
    );
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        navigate(event.key === "ArrowDown" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const handleTouchStart = (event) => {
      setStartY(event.touches[0].clientY);
    };
    window.addEventListener("touchstart", handleTouchStart);

    const handleTouchMove = (event) => {
      setEndY(event.touches[0].clientY);
    };
    window.addEventListener("touchmove", handleTouchMove);

    const handleTouchEnd = (event) => {
      if (endY > startY + 50) {
        navigate(-1);
      } else if (endY < startY - 50) {
        navigate(1);
      }
      setStartY(null);
      setEndY(null);
    };
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [divs.length, currentDivIndex]);

  const [startY, setStartY] = useState(null);
  const [endY, setEndY] = useState(null);

  const navigate = (direction) => {
    const nextIndex = currentDivIndex + direction;
    if (nextIndex >= 0 && nextIndex < divs.length) {
      setCurrentDivIndex(nextIndex);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {divs.map((div, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
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
