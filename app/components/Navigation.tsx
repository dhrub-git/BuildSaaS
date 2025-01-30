'use client';

import Link from 'next/link';
import { UserRole } from '@prisma/client';
import { useSession } from 'next-auth/react';

function Navigation() {
    const { data: session, status } = useSession();

    return (
        <nav className="sticky top-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                BuildSaaS
                            </span>
                        </Link>
                        <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                            <Link
                                href="/projects"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/professionals"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
                            >
                                Professionals
                            </Link>
                        </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                        {status === 'loading' ? (
                            <div className="animate-pulse bg-accent h-10 w-20 rounded-full" />
                        ) : session ? (
                            <>
                                {session.user.role !== UserRole.CLIENT && (
                                    <Link
                                        href="/dashboard"
                                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <Link
                                    href="/profile"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                                >
                                    Profile
                                </Link>
                                <form action="/api/auth/signout" method="POST">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-input bg-background hover:bg-accent transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/signin"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
