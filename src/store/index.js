import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../common/services/api";
import {
  albumsServices,
  artistServices,
  categoriesServices,
  userServices,
  playlistsServices,
  podcastsServices,
  tracksServices,
} from "../common/services/modules";
import { cookies } from "../common/utils";

const StoreContext = createContext();
const libraryTabs = ["Playlists", "Podcasts", "Artists", "Albums"];

export default function StoreProvider({ children }) {
  const [token, setToken] = useState("");
  const [onLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [trackPlaying, setTrackPlaying] = useState(null);
  const [topCategories, setTopCategories] = useState([]);
  const [currentLibraryTab, setCurrentLibraryTab] = useState(libraryTabs[0]);

  async function fetchAll() {
    setLoading(true);
    const getAlbum = albumsServices.get();
    const getArtists = artistServices.get();
    const getTopArtists = artistServices.getTop();
    const getCategories = categoriesServices.get();
    const getUser = userServices.get();
    const getPlaylists = playlistsServices.get();
    const getPodcasts = podcastsServices.get();
    const getTopTracks = tracksServices.getTop(1);

    const data = await Promise.all([
      getAlbum,
      getArtists,
      getTopArtists,
      getCategories,
      getUser,
      getPlaylists,
      getPodcasts,
      getTopTracks,
    ]);

    const [
      fetchedAlbums,
      fetchedArtists,
      fetchedTopArtists,
      fetchedCategories,
      fetchedUser,
      fetchedPlaylists,
      fetchedPodcasts,
      fetchedTopTracks,
    ] = data;
    setAlbums([...fetchedAlbums]);
    setArtists([...fetchedArtists]);
    setTopArtists([...fetchedTopArtists]);
    setTopCategories([...fetchedCategories.slice(0, 4)]);
    setCategories([...fetchedCategories.slice(4)]);
    setUser({ ...fetchedUser });
    setPlaylists([...fetchedPlaylists]);
    setPodcasts([...fetchedPodcasts]);
    setTrackPlaying({ ...fetchedTopTracks[0] });

    setLoading(false);
  }

  function clearStore() {
    setLoading(false);
    setToken("");
    setUser(null);
    setAlbums([]);
    setArtists([]);
    setTopArtists([]);
    setCategories([]);
    setPlaylists([]);
    setTopCategories([]);
    setPodcasts([]);
    setTrackPlaying(null);
  }

  useEffect(() => {
    setLoading(true);
    const storedToken = cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }
    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      fetchAll();
    } else {
      setLoading(false);
      setTimeout(() => {
      }, 500);
    }
  }, [token]);


  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
        clearStore,
        onLoading,
        setLoading,
        user,
        albums,
        podcasts,
        artists,
        topArtists,
        playlists,
        trackPlaying,
        categories,
        topCategories,
        libraryTabs,
        currentLibraryTab,
        setCurrentLibraryTab,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  return { ...context };
}
