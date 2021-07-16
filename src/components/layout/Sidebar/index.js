import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { Logo } from "@/components/ui";
import Navigation from "./Navigation";
import PlaylistOptions from "./PlaylistOptions";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/home" className="brand">
        <Logo className="brand-logo" />
      </Link>

      <Navigation />
      <PlaylistOptions />

      <div className="divider"></div>

      <div className="container-relative">
        <Playlists />
        <button className="btn-install">
          <FontAwesomeIcon icon={faArrowAltCircleDown} color={"CurrentColor"} />
          Install App
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
