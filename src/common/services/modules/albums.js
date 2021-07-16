import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const responde = await api.get(`/me/albums?limit=${limit}`);
      const albums = responde.data.items.map((item) => item.album);

      return albums;
    } catch (error) {
      console.log(error);
    }
  },
};
