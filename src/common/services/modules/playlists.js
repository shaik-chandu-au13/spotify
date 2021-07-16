import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const response = await api.get(`/me/playlists?limit${limit}`);

      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  },
};
