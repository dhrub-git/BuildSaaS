import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import AuthProvider from './providers/AuthProvider';

export const metadata: Metadata = {
    title: 'BuildSaaS - Professional Portfolio Marketplace',
    description:
        'Connect with top architects, builders, and designers. Showcase your work and find the perfect professional for your project.',
    keywords: [
        'architecture',
        'construction',
        'design',
        'professionals',
        'portfolio',
        'marketplace',
    ],
    authors: [
        {
            name: 'BuildSaaS',
            url: 'https://buildsaas.com',
        },
    ],
    openGraph: {
        type: 'website',
        title: 'BuildSaaS - Professional Portfolio Marketplace',
        description: 'Connect with top architects, builders, and designers',
        siteName: 'BuildSaaS',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BuildSaaS - Professional Portfolio Marketplace',
        description: 'Connect with top architects, builders, and designers',
    },
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className} suppressHydrationWarning>
            <body className="min-h-screen bg-background font-sans antialiased">
                <AuthProvider>
                    <div className="relative flex min-h-screen flex-col">
                        <Navigation />
                        <main className="flex-1 flex-grow">{children}</main>
                        <Footer />
                    </div>
                </AuthProvider>
                <Analytics />
            </body>
        </html>
    );
}
