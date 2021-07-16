import React from "react";
import "./styles.scss";

import { useStore } from "@/store";

const Playlists = () => {
  const { playlists } = useStore();

  return (
    <ul className="playlists-list">
      {playlists.map((playlist) => (
        <li key={playlist.id} title={playlist.name}>
          {playlist.name}
        </li>
      ))}
    </ul>
  );
};

export default Playlists;
