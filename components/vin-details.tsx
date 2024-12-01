import { Card } from '@/components/ui/card';
import type { DecodedVin } from '@/lib/types';

interface VinDetailsProps {
  data: DecodedVin;
}

export function VinDetails({ data }: VinDetailsProps) {
  const details = [
    { label: 'Model', value: data.model },
    { label: 'Year', value: data.year },
    { label: 'Variant', value: data.variant },
    { label: 'Trim', value: data.trim },
    { label: 'Battery Type', value: data.battery_type },
    { label: 'Motor', value: data.motor },
    { label: 'Drive', value: data.drive },
    { label: 'Body Type', value: data.body_type },
    { label: 'Manufacturer', value: data.manufacturer },
    { label: 'Location of Manufacture', value: data.location_of_manufacture },
    { label: 'Serial Number', value: data.serial_number },
    { label: 'Restraint Systems', value: data.restraint_systems },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map(({ label, value }) => (
          <div key={label} className="space-y-1">
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </div>
    </Card>
  );
}