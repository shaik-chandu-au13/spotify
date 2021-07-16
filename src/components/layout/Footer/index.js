import React, { useState } from "react";
import "./styles.scss";

import { useStore } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRandom,
  faStepBackward,
  faStepForward,
  faReplyAll,
} from "@fortawesome/free-solid-svg-icons";
import AudioProgress from "./AudioProgress";
import AudioInfo from "./AudioInfo";
import AudioOptions from "./AudioOptions";

const Footer = () => {
  const { trackPlaying } = useStore();
  const [isPlaying, setIsPlaying] = useState(true);

  function togglePlayingState() {
    setIsPlaying(!isPlaying);
  }

  return (
    <footer className="footer">
      <AudioInfo track={trackPlaying} />

      <div className="audio-controls">
        <div className="btn-group">
          <button className="btn-secondary btn-random">
            <FontAwesomeIcon icon={faRandom} />
          </button>

          <button className="btn-primary btn-back">
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button className="btn-primary btn-play" onClick={togglePlayingState}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button className="btn-primary btn-forward">
            <FontAwesomeIcon icon={faStepForward} />
          </button>

          <button className="btn-secondary btn-repeat">
            <FontAwesomeIcon icon={faReplyAll} />
          </button>
        </div>

        <AudioProgress audioLength={trackPlaying ? trackPlaying.duration_ms : 0} />
      </div>

      <AudioOptions />
    </footer>
  );
};

export default Footer;
