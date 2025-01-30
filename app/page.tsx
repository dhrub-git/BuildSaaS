import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, PlayCircle } from 'lucide-react';
import React from 'react';

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary to-secondary blur-3xl opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-in">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Find the Perfect Professional for Your Project
                            </h1>
                            <p className="text-xl mb-8 text-muted-foreground">
                                Connect with top architects, builders, and interior designers.
                                Browse portfolios, read reviews, and bring your vision to life.
                            </p>
                            <div className="space-x-4">
                                <Link
                                    href="/projects"
                                    className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
                                >
                                    Browse Projects
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className="inline-block bg-background/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full font-semibold hover:bg-background/80 transition-all duration-200"
                                >
                                    Join as Professional
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block relative h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl animate-in" />
                            <Image
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                                alt="Modern architecture"
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Browse by Category
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/projects?category=${category.slug}`}
                                className="group relative rounded-2xl overflow-hidden h-72 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Image
                                    src={category.imageUrl}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20 group-hover:from-primary/90 group-hover:to-primary/30 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-primary-foreground text-2xl font-semibold transform group-hover:scale-105 transition-transform duration-300">
                                        {category.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl glass flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                    {React.cloneElement(step.icon, { className: 'text-primary' })}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-secondary opacity-90" />
                    <Image
                        src="https://images.unsplash.com/photo-1517582082532-16a092d47074"
                        alt="Construction background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                        Join thousands of clients who have found their perfect professional match on
                        our platform.
                    </p>
                    <Link
                        href="/auth/signup"
                        className="inline-block bg-background/10 backdrop-blur-sm border border-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-background/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
        </div>
    );
}

const categories = [
    {
        name: 'Residential Architecture',
        slug: 'residential',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
        name: 'Commercial Projects',
        slug: 'commercial',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    },
    {
        name: 'Interior Design',
        slug: 'interior-design',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    },
    {
        name: 'Landscape Architecture',
        slug: 'landscape',
        imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d',
    },
    {
        name: 'Renovation',
        slug: 'renovation',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    },
    {
        name: 'Sustainable Design',
        slug: 'sustainable',
        imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343',
    },
];

const steps = [
    {
        title: 'Browse Portfolios',
        description:
            'Explore diverse portfolios from verified professionals and find the perfect match for your project.',
        icon: <Search size={32} />,
    },
    {
        title: 'Connect Directly',
        description:
            'Message professionals, discuss your project details, and get quotes through our platform.',
        icon: <MessageCircle size={32} />,
    },
    {
        title: 'Start Your Project',
        description:
            'Book consultations, track progress, and bring your vision to life with confidence.',
        icon: <PlayCircle size={32} />,
    },
];
