import { fetchFromApi } from '../utils/api';
import type { DecodedVin } from '../types';

export async function decodeVin(vin: string): Promise<DecodedVin> {
  try {
    return await fetchFromApi<DecodedVin>(`/vins/${vin}`);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to decode VIN');
  }
}