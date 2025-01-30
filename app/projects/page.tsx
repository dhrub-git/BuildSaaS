'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card } from '@/app/components/ui/Card';
import { SearchAndFilter } from '@/app/components/ui/SearchAndFilter';
import { CardSkeleton } from '@/app/components/ui/CardSkeleton';

// Sample data - would come from API in production
const projects = [
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
    },
    // Add more sample projects as needed
];

const filters = [
    {
        label: 'Type',
        options: [
            { label: 'Commercial', value: 'Commercial' },
            { label: 'Residential', value: 'Residential' },
            { label: 'Industrial', value: 'Industrial' },
        ],
    },
    {
        label: 'Status',
        options: [
            { label: 'In Progress', value: 'In Progress' },
            { label: 'Completed', value: 'Completed' },
            { label: 'Planning', value: 'Planning' },
        ],
    },
];

export default function ProjectsPage() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    const handleFilterChange = useCallback((filterName: string, value: string) => {
        setActiveFilters((prev) => ({
            ...prev,
            [filterName]: value,
        }));
    }, []);

    // Apply filters and search
    useEffect(() => {
        let result = [...projects];

        // Apply search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (project) =>
                    project.title.toLowerCase().includes(query) ||
                    project.location.toLowerCase().includes(query),
            );
        }

        // Apply filters
        Object.entries(activeFilters).forEach(([key, value]) => {
            if (value) {
                result = result.filter((project) => {
                    if (key === 'Type') return project.type === value;
                    if (key === 'Status') return project.status === value;
                    return true;
                });
            }
        });

        setFilteredProjects(result);
    }, [searchQuery, activeFilters]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Projects</h1>
                <p className="text-lg text-gray-600">
                    Discover our latest construction projects across Australia
                </p>
            </div>

            <SearchAndFilter
                className="mb-8"
                filters={filters}
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
            />

            {isLoading ? (
                <CardSkeleton />
            ) : error ? (
                <div className="text-center py-12">
                    <p className="text-red-500 text-lg">{error}</p>
                </div>
            ) : filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No projects found matching your criteria
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            subtitle={project.location}
                            details={[
                                { label: 'Type', value: project.type },
                                { label: 'Status', value: project.status },
                                { label: 'Budget', value: project.budget },
                                { label: 'Completion', value: project.completion },
                            ]}
                            badges={project.badges}
                            href={`/projects/${project.id}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
