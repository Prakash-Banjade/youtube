import React, { useContext, useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import Skeleton from "./Skeleton";

import { VideosContext } from "./GetVideos";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const Shorts = lazy(() => import("./routes/Shorts"));

function App() {
  const [menuToggled, setMenuToggled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [smallSearchInput, setSmallSearchInput] = useState(false)
    const [smallInputExpand, setSmallInputExpand] = useState(false);


  const { progress, setProgress, setOrientation } = useContext(VideosContext);

  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (location.pathname === '/shorts') {
      document.querySelector('main').classList.add('inShorts')
      document.body.style.overflowY = "hidden";
      setOrientation('portrait')
    } else {
      document.querySelector('main').classList.remove('inShorts')
      document.body.style.overflowY = "scroll";
      setOrientation('landscape')
    }

    setMenuToggled(false)
  }, [location]);

  const [width, setWidth] = useState(window.innerWidth);
  const [toggleAble, setToggleAble] = useState(true)
  const [hideAside, setHideAside] = useState(false)
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  useEffect(()=>{
    setToggleAble(width < 1300? false : true)
    setMenuToggled(width < 1300? false : true)
    setHideAside(width < 600? true : false)
    setSmallSearchInput(width < 600? true : false)
  }, [width])


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
        <Aside menuToggled={menuToggled} toggleAble={toggleAble} hideAside={hideAside} />

        <main className={`${(!menuToggled && toggleAble) ? "toggled" : ""} ${hideAside? 'fullWidth' : ''}`}>
          <Suspense
            fallback={
              (location.pathname === "/" || "/youtube") ? <Skeleton /> : <h1>Loading...</h1>
            }
          >
            <Routes>
              <Route end path="/" element={<Home />} />
              <Route end path="/youtube" element={<Home />} />

              <Route end path="/shorts" element={<Shorts />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      {menuToggled && !toggleAble && <div className="shadow" onClick={()=>{setMenuToggled(false)}}></div>}
    </>
  );
}

export default App;
