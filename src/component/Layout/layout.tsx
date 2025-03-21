import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useLocation, useNavigation } from "react-router-dom";
import PageLoader from "../common/pageLoader";
import AutoLogout from "../common/autoLogout";
import { useUI } from "../../context/ui.context";
import SidebarComp from "./sidebar";
import { MdSportsCricket } from "react-icons/md";
import NavbarComp from "../pages/Home/navbar";
import CasinoComp from "../common/Casino";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLogin } = useUI();
  const [loading, setLoading] = useState(true);

  const location = useLocation(); // Now it's inside Router

  useEffect(() => {
    console.log("Route changed:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad(); // If the page is already loaded, remove loader immediately
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {isLogin ? <AutoLogout timeout={180000} /> : ""}

      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Header />

          <main className="main-container">
            <div className="sidebar">
              <SidebarComp />
            </div>
            {children}
            {/* <div className="main-component">
              <div className="center-main-container home-page">
                <div className="center-container">
                  <div className="latest-event d-none d-xl-flex">
                    <div className="latest-event-item ">
                      <a className="blink_me" href="/game-details/4/828856279">
                        <MdSportsCricket size={20} rotate={"90"} />
                        <span>Indian Premier League</span>
                      </a>
                    </div>
                  </div>

                 <NavbarComp/>
                </div>
              </div>
              {children}
              <CasinoComp/>
            </div> */}
          </main>
          {((location.pathname || "").split("/") || [])[1] !==
          "casino-lobby" ? (
            <Footer />
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Layout;
