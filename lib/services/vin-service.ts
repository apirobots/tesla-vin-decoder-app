import { fetchFromApi } from '../utils/api';
import type { DecodedVin } from '../types';

const TESLA_VIN_REGEX = /^[A-Z0-9]{17}$/;  // VIN is 17 characters

export function validateVin(vin: string): { isValid: boolean; error?: string } {
  // Basic format check
  if (!TESLA_VIN_REGEX.test(vin)) {
    return {
      isValid: false,
      error: 'VIN must be 17 characters long.',
    };
  }


  return { isValid: true };
}

export async function decodeVin(vin: string): Promise<DecodedVin> {
  // Validate VIN before making the request
  const validation = validateVin(vin);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  try {
    return await fetchFromApi<DecodedVin>(`/vins/${vin}`);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to decode VIN');
  }
}