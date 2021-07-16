import React, { useState, useEffect } from "react";
import "./styles.scss";

import InputRange from "../InputRange";

const AudioProgress = ({ audioLength = 0 }) => {
  const audioLengthInMinutes = millisecondToMinutes(audioLength);
  const audioLengthInSeconds = minuteToSecond(audioLengthInMinutes);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  function updateProgress(e) {
    const newPercent = parseFloat(e.target.value, 10);
    setCurrentPercent(newPercent);

    const newSecond = (newPercent * audioLengthInSeconds) / 100;
    setCurrentSecond(newSecond);
  }

  function millisecondToMinutes(timeInMs) {
    let h, m, s;
    h = Math.floor(timeInMs / 1000 / 60 / 60);
    m = Math.floor((timeInMs / 1000 / 60 / 60 - h) * 60);
    s = Math.floor(((timeInMs / 1000 / 60 / 60 - h) * 60 - m) * 60);
    return `${m}:${s}`;
  }

  function secondsToMinute(duration) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
    let result = "";

    if (hrs > 0) result += "" + hrs + ":" + (mins < 10 ? "0" : "");
    result += "" + mins + ":" + (secs < 10 ? "0" : "");
    result += "" + secs;
    return result;
  }

  function minuteToSecond(minute) {
    let parts = minute.split(":"),
      minutes = +parts[0],
      seconds = +parts[1];
    return parseFloat((minutes * 60 + seconds).toFixed(3));
  }

  useEffect(() => {
    let newPercentValue;
    if (audioLengthInSeconds === 0) newPercentValue = 0;
    else newPercentValue = (currentSecond * 100) / audioLengthInSeconds;

    setCurrentPercent(newPercentValue);
  }, [currentSecond, audioLengthInSeconds]);

  return (
    <div className="audio-progress-container">
      <span className="time-text current-time">{secondsToMinute(currentSecond)}</span>

      <InputRange value={currentPercent} onChange={updateProgress} />

      <span className="time-text max-time">{audioLengthInMinutes}</span>
    </div>
  );
};

export default AudioProgress;
