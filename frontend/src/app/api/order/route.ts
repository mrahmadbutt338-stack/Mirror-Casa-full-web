import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would save this to a database
    console.log('Order received:', body);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Order received successfully',
      order: body 
    });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process order' },
      { status: 500 }
    );
  }
}
