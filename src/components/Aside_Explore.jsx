import React from "react";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const Aside_Explore = () => {
  return (
    <div className="explore aside_section">
      <header>Explore</header>

      <section className="explore-list">
        <ul>
          <li>
            <a href="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl">
              <WhatshotOutlinedIcon />
              Trending
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
              <MusicNoteOutlinedIcon />
              Music
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/gaming">
              <SportsEsportsOutlinedIcon />
              Gaming
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
              <EmojiEventsOutlinedIcon />
              Sports
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Aside_Explore;
