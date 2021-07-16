import React from "react";
import "./styles.scss";

import { useStore } from "@/store";
import { artistsArrayToString } from "@utils";
import { Card, SectionHeader } from "@/components/ui";

const YourLibrary = () => {
  const { currentLibraryTab, albums, podcasts, artists, playlists } = useStore();

  function getPlaylistDescription(playlist) {
    if (playlist.description) {
      return playlist.description.replace(/<\/?[^>]+(>|$)/g, "");
    }

    return `By ${playlist.owner.display_name}`;
  }

  return (
    <div className="your-library-container">
      <SectionHeader title={currentLibraryTab} />

      <div className="grid-cards">
        {currentLibraryTab === "Playlists" &&
          playlists.map((playlist) => (
            <Card
              className="grid-item"
              key={playlist.id}
              title={playlist.name}
              subtitle={getPlaylistDescription(playlist)}
              image={playlist?.images[0]?.url}
              subtitleMultiline={true}
            />
          ))}

        {currentLibraryTab === "Artists" &&
          artists.map((artist) => (
            <Card
              className="grid-item"
              key={artist.id}
              title={artist.name}
              subtitle="Artist"
              image={artist?.images[1]?.url}
              imageRounded={true}
            />
          ))}

        {currentLibraryTab === "Podcasts" &&
          podcasts.map((podcast) => (
            <Card
              className="grid-item"
              key={podcast.id}
              title={podcast.name}
              subtitle={podcast.publisher}
              image={podcast?.images[1]?.url}
            />
          ))}

        {currentLibraryTab === "Albums" &&
          albums.map((album) => (
            <Card
              className="grid-item"
              key={album.id}
              title={album.name}
              subtitle={artistsArrayToString(album.artists)}
              subtitleLink="#"
              image={album?.images[1]?.url}
            />
          ))}
      </div>
    </div>
  );
};

export default YourLibrary;
