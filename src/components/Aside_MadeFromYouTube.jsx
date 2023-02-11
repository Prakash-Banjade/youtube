import React from "react";

import YoutubeKids from "../assets/youtubekids.svg";
import YoutubeMusic from "../assets/youtubemusic.svg";
import YoutubeStudio from "../assets/youtubeStudio.svg";
import YoutubeTV from "../assets/youtubeTV.svg";

const Aside_MadeFromYouTube = () => {
  const list = [
    {
      id: 1,
      logo: YoutubeStudio,
      title: "Creator Studio",
      link: "https://studio.youtube.com/",
    },
    {
      id: 2,
      logo: YoutubeMusic,
      title: "YouTube Music",
      link: "https://music.youtube.com/",
    },
    {
      id: 3,
      logo: YoutubeKids,
      title: "YouTube Kids",
      link: "https://www.youtubekids.com/?source=youtube_web",
    },
    {
      id: 4,
      logo: YoutubeTV,
      title: "YouTube TV",
      link: "https://tv.youtube.com/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273",
    },
  ];
  return (
    <div className="madeFromYouTube aside_section">
      <header>Made from YouTube</header>

      <section className="madeFromYouTube-list">
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <a href="/">
                  <img style={{opacity: 1}} src={item.logo} alt={item.title} />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Aside_MadeFromYouTube;
