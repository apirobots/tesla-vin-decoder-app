import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Tesla VIN Decoder';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { vin?: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              background: 'linear-gradient(to bottom right, #E31937, #171A20)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
            }}
          >
            Tesla VIN Decoder
          </h1>
          {params.vin && (
            <p style={{ fontSize: 40, color: '#666', marginTop: 20 }}>
              {params.vin}
            </p>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 