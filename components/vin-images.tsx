"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface VinImagesProps {
  carImages: string[];
  vinLocations: string[];
}

export function VinImages({ carImages, vinLocations }: VinImagesProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Card className="p-6">
      <Tabs defaultValue="car" className="space-y-4">
        <TabsList>
          <TabsTrigger value="car">Car Images</TabsTrigger>
          <TabsTrigger value="vin">VIN Locations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="car" className="space-y-4">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={carImages[activeImage]}
              alt="Tesla vehicle"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {carImages.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={cn(
                  "aspect-video relative rounded-md overflow-hidden",
                  activeImage === index ? "ring-2 ring-primary" : "opacity-70"
                )}
                type="button"
              >
                <Image
                  src={image}
                  alt={`Tesla vehicle thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vin" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vinLocations.map((image, index) => (
            <div key={image} className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`VIN location ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}