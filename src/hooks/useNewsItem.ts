import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  createNewsItem,
  deleteNewsItem,
  fetchNews,
  fetchNewsItemById,
  updateNewsItem,
} from '@/api/newsItemApi';

import { NewsDataProps } from '@/types/newsProps';

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

export const useCreateNewsItem = () => {
  // ✅ исправил название
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewsItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};

export const useUpdateNewsItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<NewsDataProps> }) =>
      updateNewsItem(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['newsItem', id] }); // ✅ сбрасываем кеш новости
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};

export const useDeleteNewsItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNewsItem(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      queryClient.invalidateQueries({ queryKey: ['newsItem', id] });
    },
  });
};
