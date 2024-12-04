export const API_CONFIG = {
  RAPIDAPI_HOST: process.env.RAPIDAPI_HOST as string,
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY as string,
  API_BASE_URL: 'https://tesla-vin-decoder-api-by-apirobots.p.rapidapi.com/v1',
} as const;