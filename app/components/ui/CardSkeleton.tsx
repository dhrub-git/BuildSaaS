interface CardSkeletonProps {
    count?: number;
}

export function CardSkeleton({ count = 6 }: CardSkeletonProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="rounded-xl bg-white border border-gray-200 overflow-hidden animate-pulse"
                >
                    <div className="aspect-[4/3] bg-gray-200" />
                    <div className="p-4 space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            {Array.from({ length: 4 }).map((_, detailIndex) => (
                                <div key={detailIndex} className="space-y-1">
                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
