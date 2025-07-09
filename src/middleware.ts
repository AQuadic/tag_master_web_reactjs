import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Define protected routes that require authentication
const protectedRoutes = ["/cart", "/profile"];

function isProtectedRoute(pathname: string): boolean {
  return protectedRoutes.some(
    (route) =>
      pathname.startsWith(route) ||
      pathname.startsWith(`/en${route}`) ||
      pathname.startsWith(`/ar${route}`),
  );
}

function isPublicRoute(pathname: string): boolean {
  return (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/en/auth") ||
    pathname.startsWith("/ar/auth")
  );
}

function getTokenFromCookies(request: NextRequest): string | null {
  // Get token from cookies (adjust cookie name as needed)
  const token =
    request.cookies.get("tag-master-token")?.value ||
    request.cookies.get("token")?.value ||
    request.cookies.get("authToken")?.value;

  return token || null;
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = getTokenFromCookies(request);

  // Check if the route is protected
  if (isProtectedRoute(pathname)) {
    if (!token) {
      // Redirect to auth login if no token
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (isPublicRoute(pathname)) {
    if (token) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If route is public or user is authenticated, proceed with next-intl middleware
  const intlMiddleware = createMiddleware(routing);
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
