import React, { useState, useEffect } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faVolumeUp, faVolumeDown, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import InputRange from "../InputRange";

const AudioOptions = () => {
  const [currentVolume, setCurrentVolume] = useState(100);
  const [previousVolume, setPreviousVolume] = useState(currentVolume);
  const [volumeIcon, setVolumeIcon] = useState(faVolumeUp);

  function updateCurrentValue(e) {
    setCurrentVolume(parseFloat(e.target.value, 10));
  }

  function toggleVolumeMute() {
    if (currentVolume !== 0) {
      setPreviousVolume(currentVolume);
      setCurrentVolume(0);
    } else setCurrentVolume(previousVolume);
  }

  function setCurrentVolumeIcon() {
    if (currentVolume === 0) setVolumeIcon(faVolumeMute);
    else if (currentVolume < 50) setVolumeIcon(faVolumeDown);
    else setVolumeIcon(faVolumeUp);
  }

  useEffect(setCurrentVolumeIcon, [currentVolume]);

  return (
    <div className="audio-options-container">
      <button className="btn">
        <FontAwesomeIcon icon={faListAlt} />
      </button>
      <button className="btn">
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <button className="btn btn-volume" onClick={toggleVolumeMute}>
        <FontAwesomeIcon icon={volumeIcon} />
      </button>

      <InputRange value={currentVolume} onChange={updateCurrentValue} />
    </div>
  );
};

export default AudioOptions;
