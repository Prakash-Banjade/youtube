import React, {
  useContext,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import "../css/Videos_Section.scss";
import Skeleton from "../Skeleton";
import { APIParamsContext } from "../APIParams";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import CircularProgress from "@mui/material/CircularProgress";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import useVideoSearch from "../useVideoSearch";

const VideoDetailsAndMore = ({ video }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(false);

  const buttonRef = useRef(null);

  const handleMoreClick = () => {
    setShowPopup((prev) => !prev);
  };

  const getPopupStyle = () => {
    if (!showPopup) {
      return { display: "none" };
    }

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    if (buttonRect.right + 150 > windowWidth) {
      return {
        display: "block",
        left: "20%",
        right: "auto",
        top: "102%",
      };
    } else {
      return {
        display: "block",
        left: "100%",
        right: "auto",
        top: "102%",
      };
    }
  };
  return (
    <>
      <div
        className="video-details"
        onMouseEnter={() => {
          setShowMoreBtn(true);
        }}
        onMouseLeave={() => {
          setShowMoreBtn(false);
        }}
      >
        {false && <a href={video.user.url} title={video.user.name}>
          <img src={video.image} loading="lazy" alt="channelLogo" />
        </a>}
        <div className="details">
          <h2 title={video.user.name}>
            {video.user.name.length > 18
              ? `${video.user.name.slice(0, 18)}...`
              : video.user.name}

            <IconButton
              ref={buttonRef}
              onFocus={handleMoreClick}
              onBlur={handleMoreClick}
              aria-label="More"
              sx={{
                "&:hover": {
                  backgroundColor: "var(--dark-light-light)",
                },
              }}
            >
              <MoreVertIcon
                sx={{
                  color: "var(--text-color)",
                  opacity: showMoreBtn ? 1 : 0,
                }}
              />
            </IconButton>
          </h2>
          <p>{String(video.id).slice(0, 3)}K views</p>
        </div>
      </div>

      <div className="more" style={getPopupStyle()}>
        <div className="more-item">
          <WatchLaterOutlinedIcon sx={{ color: "var(--text-color)" }} />
          <p>Save to Watch later</p>
        </div>

        <div className="more-item">
          <PlaylistAddIcon sx={{ color: "var(--text-color)" }} />
          <p>Save to playlist</p>
        </div>
      </div>
    </>
  );
};

const SuggestedVideos = ({id}) => {
  const { query, page, setPage } = useContext(APIParamsContext);
  const { result, isloading, hasMore } = useVideoSearch(
    query,
    page,
    "landscape",
    id
  );

  const observer = useRef();
  const lastVideoRef = useCallback(
    (node) => {
      if (isloading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isloading, hasMore]
  );

  const calcTimeDuration = (sec) => {
    let totalDuration = sec / 60;
    let minutes = Math.floor(totalDuration);
    minutes = minutes > 9 ? minutes : `0${minutes}`;

    let seconds = (totalDuration - minutes) * 60;
    seconds =
      seconds > 9
        ? String(seconds).slice(0, 2)
        : `0${String(seconds).slice(0, 2)}`;

    return `${minutes}:${seconds}`;
  };

  const videoContainerRef = useRef();
  const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const [endOfTheVideos, setEndOfTheVideos] = useState(false);
  useEffect(() => {
    if (!hasMore) {
      setEndOfTheVideos(true);
    } else {
      setEndOfTheVideos(false);
    }
  }, [result]);

  const navigate = useNavigate();
  const handleVideoClick = (id) =>{
    navigate(`/watch/${id}`);
  }

  return (
    <>
      <section className="videos-section">
        <div ref={videoContainerRef} className="container">
          {result.map((video, ind) => {
            if (result.length === ind + 1) {
              return (
                <div
                  ref={lastVideoRef}
                  className="video-container"
                  key={uuidv4()}
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <div
                      onClick={()=>{handleVideoClick(video.id)}}
                      style={{ display: "grid", placeItems: "center" }}
                    >
                      <video
                        src={video.video_files[0].link}
                        poster={video.image}
                        // controls
                        preload="none"
                        title="Play"
                      />
                    </div>
                  </div>

                  <p className="duration">{calcTimeDuration(video.duration)}</p>

                  <VideoDetailsAndMore video={video} />
                </div>
              );
            } else {
              return (
                <div className="video-container" key={uuidv4()}>
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <div
                      onClick={()=>{handleVideoClick(video.id)}}
                      style={{ display: "grid", placeItems: "center" }}
                    >
                      <video
                        src={video.video_files[0].link}
                        poster={video.image}
                        // controls
                        preload="none"
                        title="Play"
                      />
                    </div>
                  </div>

                  <p className="duration">{calcTimeDuration(video.duration)}</p>

                  <VideoDetailsAndMore video={video} />
                </div>
              );
            }
          })}
        </div>

        {isloading && <Skeleton />}
        {isloading && (
          <div className="loading">
            <CircularProgress color="inherit" />
          </div>
        )}

        {endOfTheVideos && (
          <div className="endOfVideos">
            No more videos available!{" "}
            <Button variant="contained" onClick={handleScrollTop}>
              <span>Scroll Top</span> <ArrowUpwardIcon fontSize="small" />
            </Button>
          </div>
        )}
      </section>

      {/* <h1>Undefined</h1> */}
    </>
  );
};

export default SuggestedVideos;
