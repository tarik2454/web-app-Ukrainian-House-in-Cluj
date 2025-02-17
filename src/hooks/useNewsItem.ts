import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  createNewsItem,
  fetchNews,
  fetchNewsItemById,
} from '@/api/newsItemApi';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
};

export const useNewsItem = (id: number) => {
  return useQuery({
    queryKey: ['newsItem', id],
    queryFn: () => fetchNewsItemById(id),
    enabled: !!id,
  });
};

export const useCreateNewsItemt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewsItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};
