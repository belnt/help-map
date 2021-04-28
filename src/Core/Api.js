import axios from 'axios';
import { CONFIG } from './config';

const api = axios.create({
  baseURL: CONFIG.apiBase,
  responseType: 'json'
});

export async function getNeedPersons() {
  const response = await api.post('api/need-points.php');

  return response.data.points
    .map(point => ({ ...point, type: 'need-help' }));
}

export async function getCanPersons() {
  const response = await api.post('api/can-points.php');
  return response.data.points
    .map(point => ({ ...point, type: 'can-help' }));
}
