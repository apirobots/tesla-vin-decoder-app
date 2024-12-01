"use client";

import { useState } from 'react';
import { decodeVin } from '../services/vin-service';
import type { DecodedVin } from '../types';

export function useVinDecoder() {
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [decodedData, setDecodedData] = useState<DecodedVin | null>(null);

  const handleDecode = async () => {
    if (!vin) {
      setError('Please enter a VIN');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await decodeVin(vin);
      setDecodedData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to decode VIN');
    } finally {
      setLoading(false);
    }
  };

  return {
    vin,
    setVin,
    loading,
    error,
    decodedData,
    handleDecode,
  };
}