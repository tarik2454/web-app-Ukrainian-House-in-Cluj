import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  createEvent,
  fetchEventById,
  fetchEvents,
  updateEvent,
} from '@/api/eventApi';

import { EventDataProps } from '@/types/eventProps';

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEventById(id),
    enabled: !!id,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<EventDataProps> }) =>
      updateEvent(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['event', id] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};
