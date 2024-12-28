import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // const country =  req.geo?.country || 'US';
  
  // // If visited from India
  // if (country === 'IN') {
  //   const url = req.nextUrl.clone()
  //   if(url.pathname != '/forbidden'){
  //     url.pathname = '/forbidden'
  //     return NextResponse.redirect(url)
  //   }
  // }
}