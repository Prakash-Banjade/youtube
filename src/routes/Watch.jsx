import React from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import "../css/Watch.scss";

const Watch = ({ currentResults }) => {
  const params = useParams();
  const { id } = params;

  const currentVideo = currentResults.filter(
    (video) => Number(video.id) === Number(id)
  )[0];
  //   console.log(currentVideo)
  return (
    <>
      <div className="watch-wrapper">
        <section className="watch-videoContainer">
          <div className="playingVideoContainer">
            <video
              src={currentVideo.video_files[0].link}
              poster={currentVideo.image}
              controls
              preload="auto"
            />
          </div>

          <div className="watch-video-details">
            <section className="left-details">

            </section>

            <section className="right-details">

            </section>
          </div>

          <div className="description">
            
          </div>

          <div className="comment">

          </div>
        </section>

        <section className="suggested-videos-container">
            <Tags />
        </section>
      </div>
    </>
  );
};

export default Watch;
