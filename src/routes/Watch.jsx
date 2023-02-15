import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SuggestedVideos from "../components/SuggestedVideos";
import Tags from "../components/Tags";
import "../css/Watch.scss";
import useVideoGet from "../useVideoGet";

// contained
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// outlined
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import NotificationsOffRoundedIcon from "@mui/icons-material/NotificationsOffRounded";
import PersonRemoveAlt1SharpIcon from "@mui/icons-material/PersonRemoveAlt1Sharp";

const iconSize = "1.5rem";

const NotificationIcon = ({ currentStat }) => {
  return (
    <>
      {currentStat === "all" && <NotificationsActiveRoundedIcon />}
      {currentStat === "personalized" && <NotificationsNoneIcon />}
      {currentStat === "none" && <NotificationsOffRoundedIcon />}
    </>
  );
};

const VideoDetails = ({ video, width }) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [notificationStat, setNotificationStat] = useState("all");

  const subscribeBtnRef = useRef();

  const generateSubscribers = (id) => {
    let inString = String(id).slice(2, 5);
    if (inString.startsWith("0", 0)) inString = inString.slice(1, 3);
    return `${inString}K`;
  };

  const generateLikes = (id) => {
    let beforeDecimal = String(id).slice(1, 3);
    if (beforeDecimal.startsWith("0", 0))
      beforeDecimal = beforeDecimal.slice(1, 2);
    let afterDecimal = String(id).slice(3, 4);
    if (afterDecimal === "0") afterDecimal = "";
    return `${beforeDecimal}.${afterDecimal}K`;
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
    setDisLiked(false);
  };

  const handleDisLike = () => {
    setDisLiked((prev) => !prev);
    setLiked(false);
  };

  const handleSubscribeStatClick = (e) => {
    let btnArray = document.querySelectorAll(".subscriptionStat-btn");
    for (let btn of btnArray) {
      btn.classList.remove("active");
    }

    e.target.classList.add("active");
  };

  return (
    <div className="watch-video-details" style={width < 500? {marginTop: '276px'} : {}}>
      <section className="left-details">
        <div className="left-content">
          <div className="logo">
            <img src={video.image} alt="logo" loading="lazy" />
          </div>
          <div className="author">
            <h3>{video.user.name}</h3>
            <p>{generateSubscribers(video.id)} Subscribers</p>
          </div>
        </div>
        <div className="subscribe-btn hideOverflow" ref={subscribeBtnRef}>
          {!subscribed && (
            <button
              className="subscribe"
              title="Subscribe this channel"
              onClick={() => {
                setSubscribed(true);
              }}
            >
              Subscribe
            </button>
          )}

          {subscribed && (
            <button
              type="button"
              onClick={() => {
                subscribeBtnRef.current.classList.toggle("hideOverflow");
              }}
            >
              <NotificationIcon currentStat={notificationStat} />
              Subscribe
              <ExpandMoreSharpIcon sx={{ fontSize: iconSize }} />
            </button>
          )}

          <section className="more-section" aria-live="assertive">
            <div className="notification-all">
              <button
                type="button"
                className="subscriptionStat-btn all active"
                onClick={(e) => {
                  setNotificationStat("all");
                  subscribeBtnRef.current.classList.toggle("hideOverflow");
                  handleSubscribeStatClick(e);
                }}
              >
                <NotificationsActiveRoundedIcon sx={{ fontSize: iconSize }} />
                All
              </button>
            </div>
            <div className="notification-personalized">
              <button
                className="subscriptionStat-btn personalized"
                type="button"
                onClick={(e) => {
                  setNotificationStat("personalized");
                  subscribeBtnRef.current.classList.toggle("hideOverflow");
                  handleSubscribeStatClick(e);
                }}
              >
                <NotificationsNoneIcon sx={{ fontSize: iconSize }} />
                Personalized
              </button>
            </div>
            <div className="notification-none">
              <button
                className="subscriptionStat-btn none"
                type="button"
                onClick={(e) => {
                  setNotificationStat("none");
                  subscribeBtnRef.current.classList.toggle("hideOverflow");
                  handleSubscribeStatClick(e);
                }}
              >
                <NotificationsOffRoundedIcon sx={{ fontSize: iconSize }} />
                None
              </button>
            </div>
            <div className="unsubscribe">
              <button
                type="button"
                onClick={() => {
                  setSubscribed(false);
                  subscribeBtnRef.current.classList.toggle("hideOverflow");
                }}
              >
                <PersonRemoveAlt1SharpIcon sx={{ fontSize: iconSize }} />
                Unsubscribe
              </button>
            </div>
          </section>
        </div>
      </section>

      <section className="right-details">
        <div className="like-dislike">
          <div className="like" onClick={handleLike}>
            {liked && <ThumbUpIcon />}
            {!liked && <ThumbUpOffAltIcon />}
            {generateLikes(video.id)}
          </div>

          <div className="bar"></div>
          <div className="dislike" onClick={handleDisLike}>
            {disLiked && <ThumbDownIcon />}
            {!disLiked && <ThumbDownOffAltIcon />}
          </div>
        </div>
        <div className="right-content">
          <div className="share">
            <button className="share-btn">
              <ReplyIcon />
              Share
            </button>
          </div>
          <div className="more">
            <MoreHorizIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

const VideoDescription = ({ video }) => {
  const descriptionBoxRef = useRef(null);
  const showMoreBtnRef = useRef(null);

  const [descBoxOpen, setDescBoxOpen] = useState(false);
  return (
    <>
      <div
        className={`description-box ${!descBoxOpen ? "" : "hidden"}`}
        ref={descriptionBoxRef}
      >
        <header>
        {String(video.id).slice(0, 3)}K views &nbsp; 12 hours ago&nbsp;
          <span> #pexels #freeVideos #freeStockVideos</span>
        </header>

        <section className="description-body">
          <p className={`description-text ${descBoxOpen ? "" : "hidden"}`}>
            {" "}
            Pexels is a fantastic resource for anyone looking for high-quality,
            royalty-free photos and videos. With a vast collection of
            user-contributed content, Pexels offers a wide range of creative
            options for personal and commercial projects alike. The platform's
            easy-to-use search functionality and simple licensing terms make it
            a go-to choice for many designers, bloggers, and social media
            managers. Overall, Pexels is an excellent example of the power of
            crowdsourcing and community-driven content creation, and it's a
            valuable tool for anyone looking to enhance their visual content.
          </p>

          {descBoxOpen && (
            <div className="description-links">
              <div className="link">
                Check out Pexels here:{" "}
                <a href="https://www.pexels.com/">https://www.pexels.com/</a>
              </div>
              <div className="link">
                Start building with Pexel:{" "}
                <a href="https://www.pexels.com/api/">
                  https://www.pexels.com/api/
                </a>
              </div>
            </div>
          )}

          <div className="showLess">
            {descBoxOpen && (
              <button
                type="button"
                className="showLess"
                onClick={() => {
                  setDescBoxOpen(false);
                }}
              >
                Show Less
              </button>
            )}
          </div>
          {!descBoxOpen && (
            <button
              type="button"
              className="showMoreBtn"
              ref={showMoreBtnRef}
              onClick={() => {
                setDescBoxOpen(true);
              }}
            >
              Show More
            </button>
          )}
        </section>
      </div>
    </>
  );
};

const Watch = ({ width }) => {
  const params = useParams();
  const { id } = params;
  const playingVideoRef = useRef(null);
  const playingVideoContainerRef = useRef(null)

  const { requestVideo } = useVideoGet(id);

  return (
    <>
      {requestVideo !== undefined && requestVideo.video_files !== undefined && (
        <div className="watch-wrapper">
          <section className="watch-videoContainer">
            <div className="playingVideoContainer" style={width < 500 ?{position: 'fixed', top: '55px', zIndex: '999'} : {}} ref={playingVideoContainerRef}>
              <video
                ref={playingVideoRef}
                src={requestVideo.video_files[0].link}
                poster={requestVideo.image}
                controls
                preload="auto"
                autoPlay
                onLoadedData={() => {
                  playingVideoRef.current.play();
                }}
              />
            </div>

            <VideoDetails video={requestVideo} width={width} />

            <VideoDescription video={requestVideo} />

            <div className="comment"></div>
          </section>

          <section className="suggested-videos-container">
            <Tags />

            <div className="suggested-videos">
              <SuggestedVideos id={id} width={width} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Watch;
