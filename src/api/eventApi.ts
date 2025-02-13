import { API } from './index';

export const fetchEvents = async () => {
  const { data } = await API.get('/events');
  return data;
};

export const fetchEventById = async (id: number) => {
  const { data } = await API.get(`/events/${id}`);
  return data;
};

export const createEvent = async (formData: FormData) => {
  const { data } = await API.post('/events', formData);
  console.log(data);
  return data;
};
