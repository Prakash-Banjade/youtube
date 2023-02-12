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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from "@mui/material/Tooltip";

const Navbar = ({
  setMenuToggled,
  searchQuery,
  setSearchQuery,
  smallSearchInput,
  smallInputExpand,
  setSmallInputExpand
}) => {
  const bigInputRef = useRef();
  const smallInputRef = useRef();
  const country = { name: "Nepal", abbr: "np" };

  const { setQuery, setPage } = useContext(VideosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(searchQuery);
  };

  const handleFocus = (e) => {
    document.querySelector(".inputInsideSearchIcon").style.display = "flex";
  };

  const handleBlur = (e) => {
    document.querySelector(".inputInsideSearchIcon").style.display = "none";
  };

  const handleMenuToggle = (e) => {
    setMenuToggled((prev) => !prev);
  };
  return (
    <nav>
      <section className="logo-container">
        <div className="menu">
        {!smallInputExpand &&  <IconButton
            aria-label="menu"
            sx={{ "&:hover": { backgroundColor: "var(--dark-light-light)" } }}
            onClick={handleMenuToggle}
          >
            <MenuIcon sx={{ color: "var(--text-color)" }} />
          </IconButton>}
            {smallInputExpand && (
              <div style={{display: 'flex', alignItems: 'center', padding: '0 7px', cursor: 'pointer'}} onClick={()=>{
                setSmallInputExpand(false)
                setSearchQuery('')
                smallInputRef.current.classList.remove('expanded')
                setQuery('all')
              }}>
              <ArrowBackIcon sx={{color: 'var(--text-color)'}} />
              </div>
            )}
        </div>
        {!smallInputExpand && (
          <div className="logo" title="YouTube Home">
            <a href="/">
              <img
                src={Logo}
                alt="YouTube logo, play button followed by 'Youtube' text"
              />
              <span>{country.abbr.toUpperCase()}</span>
            </a>
          </div>
        )}
      </section>

      {!smallSearchInput && (
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
                ref={bigInputRef}
                className="searchInputBox"
                onBlur={handleBlur}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    bigInputRef.current.blur()
                    handleSubmit(e)
                  }
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
                    bigInputRef.current.focus();
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
      )}

      <section className="right-content">
        {smallSearchInput && (
          <form style={{ width: smallInputExpand ? "100%" : "50px" }}>
            <input
              type="text"
              value={searchQuery}
              ref={smallInputRef}
              className="smallSearchInputBox"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                  smallInputRef.current.blur();
                }
              }}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              autoCapitalize="none"
              placeholder="Search YouTube"
              aria-label="search your query"
            />

            {!smallInputExpand && (
              <SearchIcon
                onClick={() => {
                  smallInputRef.current.classList.add("expanded");
                  smallInputRef.current.focus();
                  setSmallInputExpand(true);
                }}
                sx={{
                  color: "var(--dark-white)",
                  fontWeight: "lighter",
                  fontSize: "2.1rem",
                }}
              />
            )}

           {searchQuery.length > 0 && <div
              className="cross"
              onClick={() => {
                setSearchQuery("");
                smallInputRef.current.focus();
              }}
            >
              <div className="cross-bar"></div>
            </div>}

            {(smallInputExpand && searchQuery.length === 0) && (
              <div className="mic-container">
                <MicOutlinedIcon />
              </div>
            )}
          </form>
        )}
        {!smallInputExpand && (
          <Tooltip disableInteractive title="Create">
            <VideoCallSharpIcon
              sx={{ fontSize: "1.9rem", cursor: "pointer" }}
            />
          </Tooltip>
        )}
        {!smallInputExpand && (
          <Tooltip disableInteractive title="Notifications">
            <NotificationsOutlinedIcon
              sx={{ fontSize: "1.9rem", cursor: "pointer" }}
            />
          </Tooltip>
        )}
        {!smallInputExpand && (
          <Tooltip disableInteractive title="Account">
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: "2.1rem",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
