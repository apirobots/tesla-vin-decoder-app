'use server';

import { decodeVin, validateVin } from '@/lib/services/vin-service';
import type { DecodedVin } from '@/lib/types';

export async function decodeVinAction(vin: string): Promise<{ data?: DecodedVin; error?: string }> {
  try {
    const validation = validateVin(vin);
    if (!validation.isValid) {
      return { error: validation.error };
    }

    const data = await decodeVin(vin);
    return { data };
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to decode VIN'
    };
  }
} 