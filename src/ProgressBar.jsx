import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ videoRef, duration, setDuration }) {
  const [currentTime, setCurrentTime] = useState(0);
  //   const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const progressBarRef = useRef();
  const progressBarFillRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isScrubbing) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isScrubbing, videoRef]);

  useEffect(() => {
    setDuration(videoRef.current.duration);
  }, [videoRef]);

  const handleMouseDown = () => {
    setIsScrubbing(true);
  };

  const handleMouseUp = () => {
    setIsScrubbing(false);
  };

  const handleMouseMove = (event) => {
    if (isScrubbing) {
      const progressBar = progressBarRef.current;
      const { left, width } = progressBar.getBoundingClientRect();
      const clickX = event.clientX - left;
      const percentage = clickX / width;
      const newTime = duration * percentage;
      setCurrentTime(newTime);
      videoRef.current.currentTime = newTime;
    }
  };

  const handleClick = (event) => {
    const progressBar = progressBarRef.current;

    progressBar.querySelector(".progress-bar-fill").style.transition = "none";
    const { left, width } = progressBar.getBoundingClientRect();
    const clickX = event.clientX - left;
    const percentage = clickX / width;
    const newTime = duration * percentage;

    if (isFinite(newTime)) {
      setCurrentTime(newTime);
      progressBar.querySelector(".progress-bar-fill").style.width = `${
        percentage * 100
      }%`;
      videoRef.current.currentTime = newTime;
    }
    setTimeout(() => {
      progressBar.querySelector(".progress-bar-fill").style.transition =
        isScrubbing ? "none" : "width 1s linear";
    }, 200);
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div
      className="progress-bar"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      ref={progressBarRef}
    >
      <div
        className="progress-bar-fill"
        ref={progressBarFillRef}
        style={{
          width: `${progressPercentage}%`,
          transition: isScrubbing ? "none" : "width 1s linear",
        }}
      ></div>
    </div>
  );
}
