'use client';

export default function FeaturesPage() {
    const features = [
        {
            title: 'Real-time Collaboration',
            description:
                'Work together seamlessly with team members and stakeholders in real-time.',
            icon: '🔄',
        },
        {
            title: 'Project Management',
            description:
                'Comprehensive tools for planning, tracking, and executing construction projects.',
            icon: '📊',
        },
        {
            title: 'Document Control',
            description:
                'Centralized document management with version control and approval workflows.',
            icon: '📑',
        },
        {
            title: 'Resource Allocation',
            description: 'Efficiently manage and allocate resources across multiple projects.',
            icon: '⚡',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Gain insights with powerful analytics and reporting tools.',
            icon: '📈',
        },
        {
            title: 'Mobile Access',
            description: 'Access your projects anywhere with our mobile-first platform.',
            icon: '📱',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-100 to-teal-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Features</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Discover the tools that make BuildSaaS the leading platform for construction
                        collaboration.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Highlight */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Advanced Collaboration Tools
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Our platform provides industry-leading collaboration tools that make
                                it easy for teams to work together effectively, no matter where they
                                are located.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="text-teal-600 mr-2">✓</span>
                                    Real-time document editing
                                </li>
                                <li className="flex items-center">
                                    <span className="text-teal-600 mr-2">✓</span>
                                    Built-in communication tools
                                </li>
                                <li className="flex items-center">
                                    <span className="text-teal-600 mr-2">✓</span>
                                    Project timeline visualization
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-200 h-96 rounded-lg"></div>{' '}
                        {/* Placeholder for image */}
                    </div>
                </div>
            </div>
        </div>
    );
}
