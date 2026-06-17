import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, mirrorType, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and Email are required' },
        { status: 400 }
      );
    }

    console.log('Quote request received:', {
      name,
      email,
      phone,
      mirrorType,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully! We will contact you soon.',
    });
  } catch (error) {
    console.error('Error processing quote:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}
