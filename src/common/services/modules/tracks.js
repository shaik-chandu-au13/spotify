import api from "../api";

export default {
  async getTop(limit = 50) {
    const response = await api.get(`/me/top/tracks?limit=${limit}`);

    return response.data.items;
  },
};
