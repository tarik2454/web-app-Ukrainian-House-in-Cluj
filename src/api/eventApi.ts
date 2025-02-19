import { API } from './index';

import { EventDataProps } from '@/types/eventsProps';

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
  return data;
};

export const updateEvent = async (
  id: number,
  data: Partial<EventDataProps>
) => {
  const { data: response } = await API.put(`/events/${id}`, data);
  return response;
};

export const updateFavoriteEvent = async (
  id: number,
  data: Partial<EventDataProps>
) => {
  const { data: response } = await API.patch(`/events/${id}/favorite`, data);
  return response;
};

export const deleteEvent = async (id: number) => {
  await API.delete(`/events/${id}`);
};
