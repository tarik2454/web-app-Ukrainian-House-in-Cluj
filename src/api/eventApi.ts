import apiClient from './index';

export const fetchEvents = async () => {
  const { data } = await apiClient.get('/events');
  return data;
};

export const fetchEventById = async (id: number) => {
  const { data } = await apiClient.get(`/events/${id}`);
  return data;
};

export const createEvent = async (eventData: {
  name: string;
  email: string;
}) => {
  const { data } = await apiClient.post('/events', eventData);
  return data;
};
