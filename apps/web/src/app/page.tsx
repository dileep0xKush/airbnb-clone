'use client';

import { useState } from 'react';
import { Header, Categories, Footer } from '@/components/layout';
import { Container } from '@/components/common';
import { ListingCard } from '@/components/listing';
import { mockListings } from '@/data/listing';
import { RefreshCw } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState<{ location: string; guests: number } | null>(null);

  // Filter listings based on active category and search modal inputs
  const filteredListings = mockListings.filter((listing) => {
    // 1. Category Filter
    if (selectedCategory && listing.category !== selectedCategory) {
      return false;
    }

    // 2. Search Filters (Location & Guests)
    if (searchFilters) {
      if (
        searchFilters.location &&
        !listing.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      ) {
        return false;
      }
      if (listing.guests < searchFilters.guests) {
        return false;
      }
    }

    return true;
  });

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchFilters(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Search Header */}
      <Header onSearch={(filters) => setSearchFilters(filters)} />

      {/* Category selector */}
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Grid Content */}
      <main className="flex-1 pb-16 pt-6">
        <Container>
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-10">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            /* Elegant Empty State */
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-6 text-rose-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">No exact matches</h2>
              <p className="text-gray-500 max-w-md mb-8">
                Try changing or removing some of your filters or updating your search parameters to explore other homes.
              </p>
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl hover:border-black transition font-semibold text-gray-800 text-sm cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-gray-700" />
                Remove all filters
              </button>
            </div>
          )}
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
