import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    className?: string;
    imageUrl: string;
    title: string;
    subtitle: string;
    details: { label: string; value: string | number }[];
    badges?: string[];
    hoverEffect?: boolean;
    onClick?: () => void;
    href?: string;
}

export function Card({
    className,
    imageUrl,
    title,
    subtitle,
    details,
    badges,
    hoverEffect = true,
    onClick,
    href,
}: CardProps) {
    const content = (
        <div
            onClick={onClick}
            className={cn(
                'group rounded-xl bg-white overflow-hidden',
                'border border-gray-200',
                'transition-all duration-300',
                hoverEffect && 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
                className,
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {badges && badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {badges.map((badge, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-sm font-medium bg-white/90 rounded-full"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-3">{subtitle}</p>
                <div className="grid grid-cols-2 gap-2">
                    {details.map((detail, index) => (
                        <div key={index}>
                            <p className="text-sm text-gray-500">{detail.label}</p>
                            <p className="font-medium text-gray-900">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}
