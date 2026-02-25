import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const inquiry = await db.inquiry.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
        product: body.product,
        quantity: body.quantity || null,
        message: body.message,
        status: 'pending',
      }
    })
    
    return NextResponse.json(inquiry, { status: 201 })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}

// GET all inquiries (for admin purposes)
export async function GET() {
  try {
    const inquiries = await db.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(inquiries)
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}
