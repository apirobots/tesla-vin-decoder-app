"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Car } from 'lucide-react';
import { VinDetails } from '@/components/vin-details';
import { VinImages } from '@/components/vin-images';
import { useVinDecoder } from '@/lib/hooks/use-vin-decoder';
import { useVinStore } from '@/lib/store';
import { useEffect } from 'react';
import { validateVin } from '@/lib/services/vin-service';
import { cn } from '@/lib/utils';

export function VinDecoder() {
  const {
    vin,
    setVin,
    loading,
    error,
    decodedData,
    handleDecode,
    resetState,
  } = useVinDecoder();

  const resetVin = useVinStore(state => state.resetVin);

  // Listen for store reset
  useEffect(() => {
    const unsubscribe = useVinStore.subscribe(
      (state, prevState) => {
        // If vin was reset in store (changed to empty), reset local state
        if (prevState.vin && !state.vin) {
          resetState();
        }
      }
    );

    return () => unsubscribe();
  }, [resetState]);

  // Add real-time validation feedback
  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVin = e.target.value.toUpperCase();
    setVin(newVin);
    
    // Clear error when input is empty
    if (!newVin) return;
    
    // Show validation errors as user types
    const { isValid, error: validationError } = validateVin(newVin);
    if (!isValid && newVin.length === 17) {
      setError(validationError);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex gap-4">
          <Input
            placeholder="Enter Tesla VIN (e.g., 5YJSA1E60MF123456)"
            value={vin}
            onChange={handleVinChange}
            maxLength={17}
            disabled={loading}
            className={cn(
              vin.length === 17 && !validateVin(vin).isValid && "border-destructive"
            )}
          />
          <Button
            onClick={handleDecode}
            disabled={loading || (vin.length === 17 && !validateVin(vin).isValid)}
            className="min-w-[100px] relative"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="ml-2">Decoding...</span>
              </>
            ) : (
              <>
                <Car className="mr-2 h-4 w-4" />
                Decode
              </>
            )}
          </Button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        )}
      </Card>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-tesla-red" />
            <p className="text-muted-foreground">Decoding your Tesla VIN...</p>
          </div>
        </div>
      )}

      {decodedData && !loading && (
        <div className="space-y-6">
          <VinDetails data={decodedData} />
          <VinImages 
            carImages={decodedData.car_images} 
            vinLocations={decodedData.vin_locations}
          />
        </div>
      )}
    </div>
  );
}