import { create } from 'zustand';

interface VinState {
  vin: string;
  decodedData: any | null;
  setVin: (vin: string) => void;
  setDecodedData: (data: any) => void;
  resetVin: () => void;
}

export const useVinStore = create<VinState>((set) => ({
  vin: '',
  decodedData: null,
  setVin: (vin) => set({ vin }),
  setDecodedData: (data) => set({ decodedData: data }),
  resetVin: () => set({ vin: '', decodedData: null }),
})); 