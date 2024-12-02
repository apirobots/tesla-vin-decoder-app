import type { Metadata } from 'next';

export function generateMetadata(vin?: string): Metadata {
  const title = vin 
    ? `Tesla VIN Decoder - ${vin}`
    : 'Tesla VIN Decoder';
  
  const description = vin
    ? `Decode Tesla VIN ${vin} - Get detailed information about your Tesla vehicle`
    : 'Decode your Tesla Vehicle Identification Number (VIN) and get detailed information about your car';

  const url = vin
    ? `https://tesla-vin-decoder.vercel.app/vins/${vin}`
    : 'https://tesla-vin-decoder.vercel.app';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Tesla VIN Decoder',
      images: [
        {
          url: '/og-image.png', // You'll need to create this image
          width: 1200,
          height: 630,
          alt: 'Tesla VIN Decoder',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
      creator: '@yourtwitterhandle', // Optional: your Twitter handle
    },
    metadataBase: new URL('https://tesla-vin-decoder.vercel.app'), // Update with your actual domain
  };
} 