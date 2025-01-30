'use client';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-100 to-teal-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">About BuildSaaS</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Transforming the construction industry through innovative collaboration
                        solutions.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-4">
                            At BuildSaaS, we're on a mission to revolutionize how construction
                            professionals collaborate. We believe that seamless communication and
                            efficient project management are the foundations of successful
                            construction projects.
                        </p>
                        <p className="text-gray-600">
                            Our platform brings together architects, builders, and designers in one
                            unified ecosystem, making collaboration effortless and projects more
                            successful.
                        </p>
                    </div>
                    <div className="bg-gray-200 h-96 rounded-lg"></div>{' '}
                    {/* Placeholder for image */}
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Our Leadership Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'CEO & Founder',
                                bio: '15+ years in construction technology',
                            },
                            {
                                name: 'Michael Chen',
                                role: 'CTO',
                                bio: 'Former tech lead at major construction firms',
                            },
                            {
                                name: 'Emma Williams',
                                role: 'Head of Product',
                                bio: 'Architecture background with MBA',
                            },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                                <p className="text-teal-600 text-center mb-2">{member.role}</p>
                                <p className="text-gray-600 text-center">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
