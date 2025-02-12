import apiClient from './index';

export const fetchEvents = async () => {
  const { data } = await apiClient.get('/events');
  return data;
};

export const fetchEventById = async (id: number) => {
  const { data } = await apiClient.get(`/events/${id}`);
  return data;
};

export const createEvent = async (formData: FormData) => {
  const { data } = await apiClient.post('/events', formData);
  return data;
};
