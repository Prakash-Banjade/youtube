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

const VideoDetails = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  return (
    <div className="watch-video-details">
      <section className="left-details">
        <div className="logo">
          <img src={video.image} alt="logo" loading="lazy" />
        </div>
        <div className="author">
          <h3>{video.user.name}</h3>
          <p>{String(video.id).slice(0, 3)}K views</p>
        </div>
        <div className="subscribe-btn">
          <button type="button">Subscribe</button>
        </div>
      </section>

      <section className="right-details">
        <div className="like-dislike">
          <div className="like">
            {liked && <ThumbUpIcon />}
            {!liked && <ThumbUpOffAltIcon />}
            {String(video.id).slice(2, 4)}.{String(video.id).slice(3, 4)}K
          </div>

          <div className="bar"></div>
          <div className="dislike">
            {disLiked && <ThumbDownIcon />}
            {!disLiked && <ThumbDownOffAltIcon />}
          </div>
        </div>
        <div className="more">
          <MoreHorizIcon />
        </div>
      </section>
    </div>
  );
};

const Watch = () => {
  const params = useParams();
  const { id } = params;
  const playingVideoRef = useRef();

  const { requestVideo } = useVideoGet(id);

  return (
    <>
      {requestVideo !== undefined && requestVideo.video_files !== undefined && (
        <div className="watch-wrapper">
          <section className="watch-videoContainer">
            <div className="playingVideoContainer">
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

            <VideoDetails video={requestVideo} />

            <div className="description"></div>

            <div className="comment"></div>
          </section>

          <section className="suggested-videos-container">
            <Tags />

            <div className="suggested-videos">
              <SuggestedVideos id={id} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Watch;
