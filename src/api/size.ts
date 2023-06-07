import instance from '.';
import { SizeForm } from 'src/interface/models';

export const getAll = () => {
  return instance.get('/size');
};

export const getById = (id: string) => {
  return instance.get('/size' + id);
};

export const addSize = (data: SizeForm) => {
  return instance.post('/size', data);
};

export const editSize = (id: string, data: SizeForm) => {
  return instance.put('/size' + id, data);
};

export const deleteSize = (id: string) => {
  return instance.delete('/size' + id);
};
