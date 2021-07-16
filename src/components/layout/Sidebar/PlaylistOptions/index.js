import React from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const PlaylistOptions = () => {
  return (
    <div className="playlists-options-container">
      <h2 className="title">PLAYLISTS</h2>
      <button>
        <div className="btn-icon-bg">
          <FontAwesomeIcon icon={faPlus} color={"#000"} />
        </div>
        <span className="btn-text">Create Playlist</span>
      </button>

      <button>
        <div className="btn-icon-bg bg-gradient">
          <FontAwesomeIcon icon={faHeart} color={"CurrentColor"} />
        </div>
        <span className="btn-text">Liked Songs</span>
      </button>
    </div>
  );
};

export default PlaylistOptions;
