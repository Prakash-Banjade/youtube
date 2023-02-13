import React, { useRef, useState, useContext, useEffect } from "react";
import "../css/Tags.scss";
import { APIParamsContext } from "../APIParams";

const Tags = () => {
  const tags = [
    "All",
    "Web Development",
    "JavaScript",
    "React",
    "Dave Gray",
    "Game Development",
    "Live coding",
    "Microsoft",
    "Share market",
    "News",
    "Computer Science",
    "Gaming",
    "Comedy",
    "Sports entertainment",
    "Live",
    "Music",
    "Mixes",
    "Puppies",
    "Samsung",
    "Computer Hardware",
    "Gadgets",
  ];

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { setQuery, setPage } = useContext(APIParamsContext);
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setScrollLeft(touch.pageX);
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();
    const touch = e.touches[0];
    containerRef.current.scrollLeft += scrollLeft - touch.pageX;
    setScrollLeft(touch.pageX);
  };

  const handleActiveTag = (e) => {
    Array.from(document.getElementsByClassName("tag")).forEach((tag) => {
      tag.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  useEffect(() => {
    Array.from(document.getElementsByClassName("tag"))[0].classList.add(
      "active"
    );
  }, []);

  return (
    <div className="tags-wrapper">
      <div
        className="tags"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {tags.map((tag, ind) => (
          <button
            key={tag}
            type="button"
            className="tag"
            onClickCapture={(e) => {
              setPage(1)
              setQuery(e.target.innerText);
              document.querySelector(".searchInputBox").value =
                e.target.innerText;
              handleActiveTag(e);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
