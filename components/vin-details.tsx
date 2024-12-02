import { Card } from '@/components/ui/card';
import { ShareButtons } from '@/components/share-buttons';
import type { DecodedVin } from '@/lib/types';

interface VinDetailsProps {
  data: DecodedVin;
  vin: string;
}

const FIELD_EMOJIS: Record<string, string> = {
  'Model': '🚗',
  'Year': '📅',
  'Variant': '🔄',
  'Trim': '✨',
  'Battery Type': '🔋',
  'Motor': '⚡',
  'Drive': '⚙️',
  'Body Type': '🏎️',
  'Manufacturer': '🏭',
  'Location of Manufacture': '📍',
  'Serial Number': '🔢',
  'Restraint Systems': '🔐',
};

export function VinDetails({ data, vin }: VinDetailsProps) {
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

  const shareUrl = `https://tesla-vin-decoder.vercel.app/vins/${vin}`;
  const shareTitle = `Check out this ${data.year} Tesla ${data.model} decoded with Tesla VIN Decoder`;

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold">Vehicle Details</h2>
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map(({ label, value }) => (
          <div key={label} className="space-y-1">
            <dt className="text-sm text-muted-foreground">
              <span className="mr-2" role="img" aria-label={label}>
                {FIELD_EMOJIS[label]}
              </span>
              {label}
            </dt>
            <dd>{value}</dd>
          </div>
        ))}
      </div>
    </Card>
  );
}