import React from "react";
import "./styles.scss";
import { useStore } from "../../store";
import HomeSection from "./HomeSection";

const Home = () => {
  const { albums, topArtists } = useStore();
  let initialIndex = 0;

  function getRandomAlbums(length = 10) {
    const albumsResult = albums.slice(initialIndex, initialIndex + length);
    initialIndex += length;

    return albumsResult;
  }

  return (
    <div className="home-container">
      <HomeSection title={"Recently played"} data={getRandomAlbums()} />
      <HomeSection title={"Your heavy rotation"} data={getRandomAlbums()} />
      <HomeSection title={"Your favorite artists"} data={topArtists} type={"artist"} />
      <HomeSection title={"Mood"} data={getRandomAlbums(9)} />
      <HomeSection title={"You might also like"} data={getRandomAlbums(6)} />
      <HomeSection title={"Jump back in"} data={getRandomAlbums(8)} />
      <HomeSection title={"For today's drive"} data={getRandomAlbums(7)} />
    </div>
  );
};

export default Home;
