import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createEvent, fetchEventById, fetchEvents } from '../api/eventApi';

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
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
