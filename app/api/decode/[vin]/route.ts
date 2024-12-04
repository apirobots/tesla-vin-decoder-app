import { NextResponse } from 'next/server';


export async function GET(
  request: Request,
  { params }: { params: { vin: string } }
) {
  const vin = params.vin;

  try {
    const url = process.env.API_BASE_URL as string;
    const response = await fetch(
      `https://${url}/vins/${vin}`,
      {
        headers: {
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string,
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
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
