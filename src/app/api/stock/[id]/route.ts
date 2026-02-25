import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET single stock item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const stockItem = await db.stockItem.findUnique({
      where: { id }
    })
    
    if (!stockItem) {
      return NextResponse.json(
        { error: 'Stock item not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(stockItem)
  } catch (error) {
    console.error('Error fetching stock item:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stock item' },
      { status: 500 }
    )
  }
}

// PUT update stock item
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const stockItem = await db.stockItem.update({
      where: { id },
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
        available: body.available,
      }
    })
    
    return NextResponse.json(stockItem)
  } catch (error) {
    console.error('Error updating stock item:', error)
    return NextResponse.json(
      { error: 'Failed to update stock item' },
      { status: 500 }
    )
  }
}

// DELETE stock item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    await db.stockItem.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting stock item:', error)
    return NextResponse.json(
      { error: 'Failed to delete stock item' },
      { status: 500 }
    )
  }
}
