import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Rating({ rating, size = 'md', showText = true }: RatingProps) {
  const sizeMap = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`${sizeMap[size]} ${
        i < Math.floor(rating)
          ? 'fill-gray-900 text-gray-900'
          : 'text-gray-300'
      }`}
    />
  ));

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">{stars}</div>
      {showText && <span className="text-sm font-medium text-gray-900">{rating}</span>}
    </div>
  );
}
