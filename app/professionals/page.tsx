'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card } from '@/app/components/ui/Card';
import { SearchAndFilter } from '@/app/components/ui/SearchAndFilter';
import { CardSkeleton } from '@/app/components/ui/CardSkeleton';

// Sample data - would come from API in production
const professionals = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
        name: 'John Smith',
        specialization: 'Architect',
        location: 'Sydney',
        rating: 4.9,
        reviews: 127,
        experience: '15 years',
        projects: 45,
        available: true,
        badges: ['Architect', 'Available'],
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
        name: 'Sarah Johnson',
        specialization: 'Civil Engineer',
        location: 'Melbourne',
        rating: 4.8,
        reviews: 93,
        experience: '12 years',
        projects: 38,
        available: true,
        badges: ['Engineer', 'Available'],
    },
    // Add more sample professionals as needed
];

const filters = [
    {
        label: 'Expertise',
        options: [
            { label: 'Architect', value: 'Architect' },
            { label: 'Civil Engineer', value: 'Civil Engineer' },
            { label: 'Contractor', value: 'Contractor' },
            { label: 'Project Manager', value: 'Project Manager' },
        ],
    },
    {
        label: 'Location',
        options: [
            { label: 'Sydney', value: 'Sydney' },
            { label: 'Melbourne', value: 'Melbourne' },
            { label: 'Brisbane', value: 'Brisbane' },
        ],
    },
];

const sortOptions = [
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Most Experienced', value: 'experience' },
    { label: 'Most Reviews', value: 'reviews' },
];

export default function ProfessionalsPage() {
    const [filteredProfessionals, setFilteredProfessionals] = useState(professionals);
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('rating');
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

    const handleSort = useCallback((value: string) => {
        setSortBy(value);
    }, []);

    // Apply filters, search, and sort
    useEffect(() => {
        let result = [...professionals];

        // Apply search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (professional) =>
                    professional.name.toLowerCase().includes(query) ||
                    professional.specialization.toLowerCase().includes(query) ||
                    professional.location.toLowerCase().includes(query),
            );
        }

        // Apply filters
        Object.entries(activeFilters).forEach(([key, value]) => {
            if (value) {
                result = result.filter((professional) => {
                    if (key === 'Expertise') return professional.specialization === value;
                    if (key === 'Location') return professional.location === value;
                    return true;
                });
            }
        });

        // Apply sorting
        result.sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
            if (sortBy === 'reviews') return b.reviews - a.reviews;
            return 0;
        });

        setFilteredProfessionals(result);
    }, [searchQuery, activeFilters, sortBy]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Construction Professionals
                </h1>
                <p className="text-lg text-gray-600">
                    Connect with top-rated construction experts in your area
                </p>
            </div>

            <SearchAndFilter
                className="mb-8"
                filters={filters}
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                sortOptions={sortOptions}
                onSort={handleSort}
            />

            {isLoading ? (
                <CardSkeleton />
            ) : error ? (
                <div className="text-center py-12">
                    <p className="text-red-500 text-lg">{error}</p>
                </div>
            ) : filteredProfessionals.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No professionals found matching your criteria
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProfessionals.map((professional) => (
                        <Card
                            key={professional.id}
                            imageUrl={professional.imageUrl}
                            title={professional.name}
                            subtitle={professional.specialization}
                            details={[
                                {
                                    label: 'Rating',
                                    value: `${professional.rating} (${professional.reviews})`,
                                },
                                { label: 'Experience', value: professional.experience },
                                { label: 'Projects', value: professional.projects },
                                { label: 'Location', value: professional.location },
                            ]}
                            badges={professional.badges}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
