import React, { useContext, useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import Skeleton from "./Skeleton";

import { APIParamsContext } from "./APIParams";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const Shorts = lazy(() => import("./routes/Shorts"));
const Watch = lazy(() => import("./routes/Watch"));

const FallBack = ()=>{
  const location = useLocation()

  return(
    <>
      {location.pathname === '/' && <Skeleton />}
    </>
  )
}

function App() {
  const [menuToggled, setMenuToggled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [smallSearchInput, setSmallSearchInput] = useState(false);
  const [smallInputExpand, setSmallInputExpand] = useState(false);

  const { progress, setProgress } = useContext(APIParamsContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (location.pathname === "/shorts") {
      document.querySelector("main").classList.add("inShorts");
      document.body.style.overflowY = "hidden";
    } else {
      document.querySelector("main").classList.remove("inShorts");
      document.body.style.overflowY = "scroll";
    }

    if (location.pathname.includes("/watch")) setHideAside(true);
    if (location.pathname.includes("youtube")) navigate("/");

    setMenuToggled(false);
  }, [location]);

  const [toggleAble, setToggleAble] = useState(true);
  const [hideAside, setHideAside] = useState(false);
  
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    if (location.pathname.includes("youtube")) navigate("/");
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (width < 1300 || location.pathname.includes("/watch")) {
      setToggleAble(false);
      setMenuToggled(false);
    } else {
      setMenuToggled(true);
      setToggleAble(true);
    }
    setSmallSearchInput(width < 600 ? true : false);

    if (width < 600 || location.pathname.includes("/watch")) {
      setHideAside(true);
    } else {
      setHideAside(false);
    }
  }, [width]);

  return (
    <>
      <LoadingBar
        color="#ff0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar
        setMenuToggled={setMenuToggled}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        smallSearchInput={smallSearchInput}
        smallInputExpand={smallInputExpand}
        setSmallInputExpand={setSmallInputExpand}
      />
      <div className="page-wrapper">
        <Aside
          menuToggled={menuToggled}
          toggleAble={toggleAble}
          hideAside={hideAside}
        />

        <main
          className={`${!menuToggled && toggleAble ? "toggled" : ""} ${
            hideAside ? "fullWidth" : ""
          }`}
        >
          <Suspense
            fallback={<FallBack />}
          >
            <Routes>
              <Route end path="/" element={<Home />} />
              <Route end path="/youtube" element={<Home />} />

              <Route end path="/shorts" element={<Shorts />} />
              <Route end path="watch/:id" element={<Watch width={width} />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      {menuToggled && !toggleAble && (
        <div
          className="shadow"
          onClick={() => {
            setMenuToggled(false);
          }}
        ></div>
      )}
    </>
  );
}

export default App;
