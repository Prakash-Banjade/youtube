import React, { useState, useContext, useRef } from "react";
import "../css/Navbar.scss";
import { VideosContext } from "../GetVideos";

import Logo from "../assets/YouTube-Logo.svg";
// material ui
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import Tooltip from "@mui/material/Tooltip";

const Navbar = ({setMenuToggled, searchQuery, setSearchQuery}) => {
  const inputRef = useRef();
  const country = { name: "Nepal", abbr: "np" };

  const { setQuery, setPage } = useContext(VideosContext);
  const handleSubmit = () => {
    setPage(1)
    setQuery(searchQuery);
    inputRef.current.blur()
  };

  const handleFocus = (e) => {
    document.querySelector(".inputInsideSearchIcon").style.display = "flex";
  };

  const handleBlur = (e) => {
    document.querySelector(".inputInsideSearchIcon").style.display = "none";
  };

  const handleMenuToggle = (e)=>{
    setMenuToggled(prev => !prev)
  }
  return (
    <nav>
      <section className="logo-container">
        <div className="menu">
          <IconButton
            aria-label="menu"
            sx={{ "&:hover": { backgroundColor: "var(--dark-light-light)" } }}
            onClick={handleMenuToggle}
            onBlur={()=>{setMenuToggled(false)}}
          >
            <MenuIcon sx={{ color: "var(--text-color)" }} />
          </IconButton>
        </div>
        <div className="logo" title="YouTube Home">
          <a href="/">
            <img
              src={Logo}
              alt="YouTube logo, play button followed by 'Youtube' text"
            />
            <span>{country.abbr.toUpperCase()}</span>
          </a>
        </div>
      </section>

      <section className="mid-content">
        <div className="search-container">
          <form
            className="input-wrapper"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="inputInsideSearchIcon">
              <SearchIcon
                sx={{
                  color: "var(--dark-white)",
                  fontWeight: "lighter",
                  fontSize: "1.5rem",
                }}
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onFocus={handleFocus}
              ref={inputRef}
              className="searchInputBox"
              onBlur={handleBlur}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyPress={(e) => {
                if ((e.key === 'Enter')) handleSubmit();
              }}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              autoCapitalize="none"
              placeholder="Search"
              aria-label="search your query"
            />
            {searchQuery.length > 0 && (
              <div
                className="cross"
                onClick={() => {
                  setSearchQuery("");
                  inputRef.current.focus();
                }}
              >
                <div className="cross-bar"></div>
              </div>
            )}
          </form>
          <div className="search-btn">
            <button type="submit" onClick={handleSubmit}>
              <Tooltip disableInteractive title="Search">
                <SearchIcon
                  sx={{
                    color: "var(--dark-white)",
                    fontWeight: "lighter",
                    fontSize: "1.7rem",
                  }}
                />
              </Tooltip>
            </button>
          </div>
          <div className="microphone">
            <Tooltip title="Search with your voice">
              <IconButton
                aria-label="voice search"
                sx={{ background: "#181818" }}
              >
                <MicOutlinedIcon sx={{ color: "var(--text-color)" }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="right-content">
        <Tooltip disableInteractive title="Create">
          <VideoCallSharpIcon sx={{ fontSize: "1.9rem", cursor: "pointer" }} />
        </Tooltip>
        <Tooltip disableInteractive title="Notifications">
          <NotificationsOutlinedIcon
            sx={{ fontSize: "1.9rem", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip disableInteractive title="Account">
          <AccountCircleOutlinedIcon
            sx={{
              fontSize: "2.1rem",
              transform: "translateY(-3px)",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </section>
      
    </nav>
  );
};

export default Navbar;
