import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Clone request headers to inject telemetry metadata
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-eulim-processed", "true");
  requestHeaders.set("x-eulim-route", pathname);

  // 1. Redirect legacy/alias paths to standard routes
  if (pathname === "/home") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/exhibitions" || pathname === "/exhibition-2025") {
    return NextResponse.redirect(new URL("/exhibition", request.url));
  }

  // 2. Pass request upstream with headers modified
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Limit the proxy to only check route pages and exclude static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - eulim_logo.png (logo static asset)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|eulim_logo.png).*)",
  ],
};
