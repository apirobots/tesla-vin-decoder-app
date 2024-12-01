import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { vin: string } }
) {
  const vin = params.vin;

  try {
    const response = await fetch(
      `https://[host]/v1/vins/${vin}`,
      {
        headers: {
          'X-RapidAPI-Host': '[host]',
          'X-RapidAPI-Key': process.env.[key] || '',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to decode VIN');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to decode VIN' },
      { status: 500 }
    );
  }
}