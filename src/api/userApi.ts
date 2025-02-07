import apiClient from './index';

export const fetchUsers = async () => {
  const { data } = await apiClient.get('/users');
  return data;
};

export const fetchUserById = async (id: number) => {
  const { data } = await apiClient.get(`/users/${id}`);
  return data;
};

export const createUser = async (userData: { name: string; email: string }) => {
  const { data } = await apiClient.post('/users', userData);
  return data;
};
