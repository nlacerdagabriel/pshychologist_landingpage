import axios from "axios";

export const api = axios.create({
  baseURL: process.env.WP_URL,
  auth: {
    username: process.env.WP_USERNAME,
    password: process.env.WP_PASSWORD,
  },
});

export const getGalleryImages = async () => {
  const response = await api.get("/galeria?_embed");
  return response.data;
};

export const getServices = async () => {
  const response = await api.get("/servicos");
  return response.data;
};

export const getReviews = async () => {
  const response = await api.get("/avaliacoes");
  return response.data;
};

export const getPage = async (pageId) => {
  const response = await api.get(`/pages/${pageId}`);
  return response.data;
};
