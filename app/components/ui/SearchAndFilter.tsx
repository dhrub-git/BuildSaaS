import { useCallback, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Filter {
    label: string;
    options: { label: string; value: string }[];
}

interface SearchAndFilterProps {
    className?: string;
    filters: Filter[];
    onSearch: (query: string) => void;
    onFilterChange: (filterName: string, value: string) => void;
    sortOptions?: { label: string; value: string }[];
    onSort?: (value: string) => void;
}

export function SearchAndFilter({
    className,
    filters,
    onSearch,
    onFilterChange,
    sortOptions,
    onSort,
}: SearchAndFilterProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value;
            setSearchQuery(query);
            onSearch(query);
        },
        [onSearch],
    );

    return (
        <div className={cn('space-y-4', className)}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-wrap gap-4">
                {filters.map((filter) => (
                    <div key={filter.label} className="min-w-[200px]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {filter.label}
                        </label>
                        <select
                            onChange={(e) => onFilterChange(filter.label, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All {filter.label}</option>
                            {filter.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                {sortOptions && onSort && (
                    <div className="min-w-[200px]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sort by
                        </label>
                        <select
                            onChange={(e) => onSort(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
}
