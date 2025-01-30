import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { UserRole } from '@prisma/client';

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const isPublicPath =
            req.nextUrl.pathname === '/' ||
            req.nextUrl.pathname.startsWith('/auth') ||
            req.nextUrl.pathname.startsWith('/api/auth') ||
            req.nextUrl.pathname.startsWith('/professionals') ||
            req.nextUrl.pathname.startsWith('/projects');

        // Redirect logged in users from auth pages
        if (token && req.nextUrl.pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }

        // Protect professional routes
        if (req.nextUrl.pathname.startsWith('/dashboard') && token?.role === UserRole.CLIENT) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const isPublicPath =
                    req.nextUrl.pathname === '/' ||
                    req.nextUrl.pathname.startsWith('/auth') ||
                    req.nextUrl.pathname.startsWith('/api/auth') ||
                    req.nextUrl.pathname.startsWith('/professionals') ||
                    req.nextUrl.pathname.startsWith('/projects');

                if (isPublicPath) return true;
                return !!token;
            },
        },
    },
);

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
