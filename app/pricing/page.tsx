'use client';

export default function PricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$49',
            period: 'per month',
            features: [
                'Up to 5 team members',
                '3 active projects',
                'Basic collaboration tools',
                'Email support',
            ],

            highlighted: false,
        },
        {
            name: 'Professional',
            price: '$99',
            period: 'per month',
            features: [
                'Up to 15 team members',
                'Unlimited projects',
                'Advanced collaboration tools',
                'Priority support',
                'Analytics dashboard',
            ],

            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'contact us',
            features: [
                'Unlimited team members',
                'Unlimited projects',
                'Custom integrations',
                '24/7 dedicated support',
                'Advanced security features',
            ],

            highlighted: false,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-100 to-teal-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your team's needs
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-lg p-8 ${
                                plan.highlighted ? 'ring-2 ring-teal-600 transform scale-105' : ''
                            }`}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-gray-600">/{plan.period}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <span className="text-teal-600 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 px-6 rounded-lg transition-colors ${
                                    plan.highlighted
                                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                                        : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                q: 'Can I change plans later?',
                                a: 'Yes, you can upgrade or downgrade your plan at any time.',
                            },
                            {
                                q: 'Is there a free trial?',
                                a: 'Yes, all plans come with a 14-day free trial.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards and PayPal.',
                            },
                            {
                                q: 'Do you offer refunds?',
                                a: 'Yes, we offer a 30-day money-back guarantee.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow">
                                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
