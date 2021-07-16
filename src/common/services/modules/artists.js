import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const response = await api.get(`/me/following?type=artist&limit=${limit}`);

      return response.data.artists.items;
    } catch (error) {
      console.log(error);
    }
  },

  async getTop(limit = 50) {
    const response = await api.get(`/me/top/artists?limit=${limit}`);

    return response.data.items;
  },
};
