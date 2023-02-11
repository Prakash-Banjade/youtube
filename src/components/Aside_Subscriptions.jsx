import React, { useState } from "react";
import "../css/Aside_Subscriptions.scss";
import { subscriptions } from "../subscriptions";
import LiveIcon from "../assets/live.svg";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Aside_Subscriptions = () => {
  const [showMore, setShowMore] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(
    subscriptions.slice(0, 6)
  );

  return (
    <div className="subscriptions aside_section">
      <header>Subscriptions</header>

      <section className="subscription-list">
        <ul>
          {showSubscriptions.map((sub) => {
            return (
              <li key={sub.id}>
                <a href={sub.ytLink} title={sub.channelName}>
                  <img src={sub.img} alt={sub.img} />
                  <h2>{`${sub.channelName.slice(0, 16)}${
                    sub.channelName.length > 17 ? "..." : ""
                  }`}</h2>
                  {!sub.isLive && <div className="not-live-dot"></div>}
                  {sub.isLive && (
                    <img
                      src={LiveIcon}
                      alt="live icon"
                      className="liveIconImg"
                    />
                  )}
                </a>
              </li>
            );
          })}
          <li
            className="showMore-btn"
            onClick={() => {
              setShowMore((prev) => !prev);
              setShowSubscriptions(
                showSubscriptions.length === subscriptions.length
                  ? subscriptions.slice(0, 6)
                  : subscriptions
              );
            }}
          >
            {!showMore && <KeyboardArrowDownOutlinedIcon />}
            {showMore && <KeyboardArrowUpOutlinedIcon />}
            Show {!showMore? subscriptions.length - showSubscriptions.length : ''} {!showMore? 'more' : 'less'}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Aside_Subscriptions;
