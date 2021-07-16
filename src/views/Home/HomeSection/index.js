import React from "react";
import "./styles.scss";

import { Card, SectionHeader } from "@/components/ui"; 
import { artistsArrayToString } from "@utils";

const ContentSection = ({ title = "empty", data = [], type = "album" }) => {
  return (
    <section className="home-section">
      <SectionHeader type="link" title={title} />

      <div className="grid-cards">
        {type === "album" &&
          data.map((album) => (
            <Card
              className="grid-item"
              key={album.id}
              title={album.name}
              subtitle={artistsArrayToString(album.artists)}
              subtitleLink="#"
              image={album?.images[1]?.url}
            />
          ))}

        {type === "artist" &&
          data.map((artist) => (
            <Card
              className="grid-item"
              key={artist.id}
              title={artist.name}
              subtitle={"Artist"}
              image={artist?.images[1]?.url}
              imageRounded={true}
            />
          ))}
      </div>
    </section>
  );
};

export default ContentSection;
