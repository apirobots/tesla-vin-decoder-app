import { API_CONFIG } from '../config/api';

export async function fetchFromApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    headers: {
      'X-RapidAPI-Host': API_CONFIG.RAPIDAPI_HOST,
      'X-RapidAPI-Key': API_CONFIG.RAPIDAPI_KEY,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
}