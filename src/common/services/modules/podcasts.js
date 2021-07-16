import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const response = await api.get(`/me/shows?limit${limit}`);
      const podcastas = response.data.items.map((item) => item.show);

      return podcastas;
    } catch (error) {
      console.log(error);
    }
  },
};
