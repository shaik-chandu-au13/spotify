import React, { useState } from "react";
import "./styles.scss";

import defaultCover from "@/assets/default-cover.webp";
import { artistsArrayToString } from "@utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const AudioInfo = ({ track }) => {
  const [isLoved, setIsLoved] = useState(true);

  function toggleLovedState() {
    setIsLoved(!isLoved);
  }

  return (
    <div className="audio-info-container">
      {track ? (
        <>
          <img
            className="img-cover"
            src={track.album?.images[1]?.url|| ""}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultCover;
            }}
            alt="cover"
          />
          <div className="text">
            <span className="name">{track.album.name}</span>
            <span className="artist">{artistsArrayToString(track.artists)}</span>
          </div>
          <aside>
            <button
              className={`btn-love ${isLoved ? "active" : ""}`}
              onClick={toggleLovedState}
            >
              <FontAwesomeIcon
                icon={isLoved ? faHeart : faHeartRegular}
                color={"CurrentColor"}
              />
            </button>
          </aside>
        </>
      ) : null}
    </div>
  );
};

export default AudioInfo;
