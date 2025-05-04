import { NextResponse } from 'next/server'
import { createBlogPost } from '../../../../sanity/sanity-utils'

export async function POST() {
  try {
    const result = await createBlogPost()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 })
  }
}
