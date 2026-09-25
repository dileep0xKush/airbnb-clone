'use client';

import { Heart, Share2 } from 'lucide-react';
import { Badge, Rating } from '@/components/common';
import { Divider } from '@/components/common/Divider';
import { useState, useEffect } from 'react';

interface ListingHeaderProps {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  isGuestFavorite: boolean;
}

export function ListingHeader({
  id,
  title,
  location,
  rating,
  reviews,
  isGuestFavorite,
}: ListingHeaderProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('airbnb_favorites');
      if (stored) {
        const favs = JSON.parse(stored) as string[];
        setIsFavorited(favs.includes(id));
      } else if (isGuestFavorite) {
        setIsFavorited(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, [id, isGuestFavorite]);

  const handleToggleFavorite = () => {
    const nextState = !isFavorited;
    setIsFavorited(nextState);
    try {
      const stored = localStorage.getItem('airbnb_favorites');
      let favs: string[] = stored ? JSON.parse(stored) : [];
      if (nextState) {
        if (!favs.includes(id)) favs.push(id);
      } else {
        favs = favs.filter(favId => favId !== id);
      }
      localStorage.setItem('airbnb_favorites', JSON.stringify(favs));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex items-start justify-between gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            {isGuestFavorite && (
              <Badge variant="primary" className="mb-2">
                Guest favorite
              </Badge>
            )}
            <div className="flex items-center gap-3">
              <Rating rating={rating} showText={false} />
              <button className="text-sm font-medium text-gray-900 hover:underline">
                {rating}
              </button>
              <span className="text-sm text-gray-600">·</span>
              <button className="text-sm font-medium text-gray-900 hover:underline">
                {reviews} reviews
              </button>
              <span className="text-sm text-gray-600">·</span>
              <button className="text-sm font-medium text-gray-900 hover:underline">
                {location}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          <button className="flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm font-semibold transition-colors cursor-pointer">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button
            onClick={handleToggleFavorite}
            className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <Heart
              className={`w-6 h-6 transition-all ${
                isFavorited
                  ? 'fill-rose-500 text-rose-500'
                  : 'text-gray-900'
              }`}
            />
            <span className="text-sm font-semibold">{isFavorited ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
      <Divider className="my-8" />
    </>
  );
}
