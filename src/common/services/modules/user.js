import api from "../api";

export default {
  async get() {
    try {
      const response = await api.get(`/me`);

      return {
        name: response.data.display_name,
        profilePic: response.data?.images[0]?.url || "",
      };
    } catch (error) {
      console.log(error);
    }
  },
};
