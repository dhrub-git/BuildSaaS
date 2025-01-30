'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Project {
    id: number;
    imageUrl: string;
    title: string;
    location: string;
    type: string;
    status: string;
    budget: string;
    completion: string;
    badges: string[];
    description: string;
    features: string[];
    specifications: Record<string, string>;
    gallery: string[];
}

// Sample data - would come from API in production
const projects: Project[] = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        title: 'Modern Office Complex',
        location: 'Sydney CBD',
        type: 'Commercial',
        status: 'In Progress',
        budget: '$25M',
        completion: '2025',
        badges: ['Commercial', 'In Progress'],
        description: `A state-of-the-art office complex in the heart of Sydney CBD, featuring sustainable design principles and cutting-edge amenities. This project showcases our commitment to creating modern workspaces that promote productivity and well-being.`,
        features: [
            'LEED Platinum certification',
            'Smart building technology',
            'Rooftop garden and recreational space',
            'End-of-trip facilities',
            'Electric vehicle charging stations',
            'Floor-to-ceiling windows with harbor views',
        ],
        specifications: {
            'Total Area': '45,000 sqm',
            'Number of Floors': '32',
            'Parking Spaces': '300',
            'Green Space': '2,000 sqm',
            'Construction Start': 'March 2023',
            'Expected Completion': 'Q4 2025',
        },
        gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
            'https://images.unsplash.com/photo-1497366216548-37526070297c',
        ],
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        title: 'Luxury Apartments',
        location: 'Melbourne',
        type: 'Residential',
        status: 'Completed',
        budget: '$15M',
        completion: '2024',
        badges: ['Residential', 'Completed'],
        description: `An exclusive residential development in Melbourne's premier suburb, offering luxurious living spaces with premium finishes and spectacular city views. This boutique development sets new standards in urban living.`,
        features: [
            'Premium finishes throughout',
            'Floor-to-ceiling windows',
            'Private balconies',
            'Smart home integration',
            'Secure parking',
            "Residents' lounge and gym",
        ],
        specifications: {
            'Total Units': '48',
            'Building Height': '15 floors',
            'Average Unit Size': '120 sqm',
            Parking: 'Underground, 72 spaces',
            'Construction Start': 'June 2022',
            'Completion Date': 'December 2024',
        },
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687644-c94bf5588563',
            'https://images.unsplash.com/photo-1600607687920-4e03c0cdc276',
        ],
    },
];

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const projectId = Number(params.id);
        const foundProject = projects.find((p) => p.id === projectId);
        if (foundProject) {
            setProject(foundProject);
            setSelectedImage(foundProject.imageUrl);
        }
        setIsLoading(false);
    }, [params.id]);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="animate-pulse">
                    <div className="h-96 bg-gray-200 rounded-xl mb-8" />
                    <div className="h-8 bg-gray-200 w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 w-1/2 mb-8" />
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                    <Image src={selectedImage} alt={project.title} fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {project.gallery.slice(0, 4).map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image}
                                alt={`${project.title} - ${index + 1}`}
                                fill
                                className="object-cover hover:opacity-75 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <div className="flex gap-2 mb-4">
                            {project.badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
                        <p className="text-xl text-gray-600 mb-4">{project.location}</p>
                        <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-700">
                                    <svg
                                        className="w-5 h-5 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(project.specifications).map(([key, value]) => (
                                <div key={key} className="border-b border-gray-200 pb-2">
                                    <p className="text-gray-600">{key}</p>
                                    <p className="font-medium text-gray-900">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-4 bg-white rounded-xl border border-gray-200 p-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Project Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-600">Status</p>
                                    <p className="font-medium text-gray-900">{project.status}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Type</p>
                                    <p className="font-medium text-gray-900">{project.type}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Budget</p>
                                    <p className="font-medium text-gray-900">{project.budget}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Completion</p>
                                    <p className="font-medium text-gray-900">
                                        {project.completion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={() => (window.location.href = '/contact')}
                        >
                            Contact Us About This Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
