import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // If request comes from vercel.app or any non-official domain, redirect permanently to rafarobotica.com
  if (!host.includes('rafarobotica.com')) {
    const url = request.nextUrl.clone()
    url.host = 'www.rafarobotica.com'
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, { status: 301 })
  }
}

export const config = {
  matcher: '/:path*',
}
