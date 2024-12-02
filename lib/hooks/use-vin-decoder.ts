"use client";

import { useState } from 'react';
import { decodeVinAction } from '@/app/actions';
import type { DecodedVin } from '@/lib/types';

export function useVinDecoder() {
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [decodedData, setDecodedData] = useState<DecodedVin | null>(null);

  const resetState = () => {
    setVin('');
    setError('');
    setDecodedData(null);
  };

  const handleDecode = async (paramVin: string) => {
    const curVin = paramVin || vin;
    if (!curVin) {
      setError('Please enter a VIN');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await decodeVinAction(curVin);
      if (result.error) {
        setError(result.error);
        setDecodedData(null);
      } else if (result.data) {
        setDecodedData(result.data);
        setError('');
      }
    } catch (err) {
      setError('Failed to decode VIN');
      setDecodedData(null);
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
    resetState,
    setError,
  };
}