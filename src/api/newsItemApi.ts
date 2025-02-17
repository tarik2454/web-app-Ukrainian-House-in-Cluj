import { API } from './index';

export const fetchNews = async () => {
  const { data } = await API.get('/news');
  return data;
};

export const fetchNewsItemById = async (id: number) => {
  const { data } = await API.get(`/news/${id}`);
  return data;
};

export const createNewsItem = async (formData: FormData) => {
  const { data } = await API.post('/news', formData);
  return data;
};
