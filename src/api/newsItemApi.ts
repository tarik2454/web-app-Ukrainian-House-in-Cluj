import { API } from "./index";

import { NewsDataProps } from "@/types/newsProps";

export const fetchNews = async () => {
  const { data } = await API.get("/news");
  return data;
};

export const fetchNewsItemById = async (id: number) => {
  const { data } = await API.get(`/news/${id}`);
  return data;
};

export const createNewsItem = async (formData: FormData) => {
  const { data } = await API.post("/news", formData);
  return data;
};

export const updateNewsItem = async (
  id: number,
  data: Partial<NewsDataProps>,
) => {
  const { data: response } = await API.put(`/events/${id}`, data);
  return response;
};

export const deleteNewsItem = async (id: number) => {
  await API.delete(`/events/${id}`);
};
