import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET all stock items
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    
    const where = category ? { category } : {}
    
    const stockItems = await db.stockItem.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(stockItems)
  } catch (error) {
    console.error('Error fetching stock items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stock items' },
      { status: 500 }
    )
  }
}

// POST new stock item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const stockItem = await db.stockItem.create({
      data: {
        category: body.category,
        productType: body.productType,
        grade: body.grade,
        size: body.size,
        quantity: body.quantity,
        condition: body.condition || null,
        price: body.price || null,
        location: body.location || null,
        notes: body.notes || null,
        available: body.available ?? true,
      }
    })
    
    return NextResponse.json(stockItem, { status: 201 })
  } catch (error) {
    console.error('Error creating stock item:', error)
    return NextResponse.json(
      { error: 'Failed to create stock item' },
      { status: 500 }
    )
  }
}
