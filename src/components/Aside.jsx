import React from "react";
import "../css/Aside.scss";
import { NavLink } from "react-router-dom";
import Subscriptions from "./Aside_Subscriptions";
import ShortsIcon from "../assets/YouTubeShorts.svg";
// material ui
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import Aside_Explore from "./Aside_Explore";
import Aside_MadeFromYouTube from "./Aside_MadeFromYouTube";
import Aside_Extra from "./Aside_Extra";

const ShortAside = () => {
  return (
    <aside className="hidden">
      <NavLink to="/" className="tab">
        <HomeOutlinedIcon />
        <p>Home</p>
      </NavLink>
      <NavLink to="/shorts" className="tab">
        <img src={ShortsIcon} alt="shorts icon" />
        <p>Shorts</p>
      </NavLink>
      <a href="/" className="tab" style={{ padding: "15px 5px" }}>
        <SubscriptionsOutlinedIcon />
        <p>Subsciptions</p>
      </a>
      <a href="/" className="tab">
        <VideoLibraryIcon />
        <p>Library</p>
      </a>
    </aside>
  );
};

const FullAside = () => {
  return (
    <aside>
      <section>
        <ul>
          <li title="Home">
            <NavLink to="/">
              <HomeOutlinedIcon /> Home
            </NavLink>
          </li>
          <li title="Shorts">
            <NavLink to="/shorts">
              <img src={ShortsIcon} alt="shorts icon" /> Shorts
            </NavLink>
          </li>
          <li title="Subscriptions">
            <a href="/">
              <SubscriptionsOutlinedIcon /> Subscriptions
            </a>
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <ul>
          <li title="Library">
            <a href="/">
              <VideoLibraryOutlinedIcon /> Library
            </a>
          </li>

          <li title="History">
            <a href="/">
              <HistoryOutlinedIcon /> History
            </a>
          </li>

          <li title="Your videos">
            <a href="/">
              <SmartDisplayOutlinedIcon /> Your videos
            </a>
          </li>
          <li title="Watch later">
            <a href="/">
              <WatchLaterOutlinedIcon /> Watch later
            </a>
          </li>
          <li title="Liked videos">
            <a href="/">
              <ThumbUpAltOutlinedIcon /> Liked videos
            </a>
          </li>
          <li title="Show more">
            <a href="/">
              <KeyboardArrowDownOutlinedIcon /> Show more
            </a>
          </li>
        </ul>
      </section>
      <hr />
      <Subscriptions />
      <hr />
      <Aside_Explore />
      <hr />
      <Aside_MadeFromYouTube />
      <hr />
      <Aside_Extra />
      <hr />

      <section className="aside-footer">
        <div className="upper">
          <a href="/">About</a>
          <a href="/">Press</a>
          <a href="/">Copyright</a>
          <a href="/">Contact us</a>
          <a href="/">Creators</a>
          <a href="/">Advertise</a>
          <a href="/">Developers</a>
        </div>

        <div className="lower">
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Policy & Safety</a>
          <a href="/">How YouTube Works</a>
          <a href="/">Test new features</a>
        </div>

        <div className="copyright">
          <p>&copy; 2023 Google LLC</p>
        </div>
      </section>

     
    </aside>
  );
};

const Aside = ({ menuToggled, hideAside, toggleAble }) => {
  return (
    <>
      {(menuToggled)  && <FullAside />}

      {(!menuToggled && !hideAside) && <ShortAside />}
    </>
  );
};

export default Aside;
