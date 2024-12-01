"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Car } from 'lucide-react';
import { VinDetails } from '@/components/vin-details';
import { VinImages } from '@/components/vin-images';
import { useVinDecoder } from '@/lib/hooks/use-vin-decoder';

export function VinDecoder() {
  const {
    vin,
    setVin,
    loading,
    error,
    decodedData,
    handleDecode,
  } = useVinDecoder();

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex gap-4">
          <Input
            placeholder="Enter Tesla VIN (e.g., 5YJSA1E60MF123456)"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            maxLength={17}
          />
          <Button
            onClick={handleDecode}
            disabled={loading}
            className="min-w-[100px]"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
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

      {decodedData && (
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