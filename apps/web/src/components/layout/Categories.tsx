'use client';

import { 
  Palmtree, 
  Tent, 
  Flame, 
  Globe, 
  Compass, 
  Waves, 
  Castle 
} from 'lucide-react';
import { cn } from '@/lib/cn';

interface CategoryItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryItem[] = [
  { name: 'Trending', icon: Flame },
  { name: 'Beachfront', icon: Palmtree },
  { name: 'Cabins', icon: Tent },
  { name: 'Islands', icon: Globe },
  { name: 'Design', icon: Compass },
  { name: 'Amazing pools', icon: Waves },
  { name: 'Mansions', icon: Castle },
];

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="sticky top-[73px] z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-start md:justify-center gap-8 overflow-x-auto py-4 scrollbar-none select-none">
          {/* All Listings Option */}
          <button
            onClick={() => onSelectCategory(null)}
            className={cn(
              'flex flex-col items-center justify-center gap-2 pb-2 border-b-2 transition-all cursor-pointer min-w-[56px] text-center hover:text-black hover:border-gray-300',
              selectedCategory === null
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-gray-500 font-medium'
            )}
          >
            <div className="text-xs tracking-wide">All homes</div>
          </button>

          {/* Dynamic Categories */}
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => onSelectCategory(category.name)}
                className={cn(
                  'flex flex-col items-center justify-center gap-2 pb-2 border-b-2 transition-all cursor-pointer min-w-[56px] text-center hover:text-black hover:border-gray-300',
                  isSelected
                    ? 'border-black text-black font-semibold'
                    : 'border-transparent text-gray-500 font-medium'
                )}
              >
                <Icon className={cn('w-6 h-6', isSelected ? 'text-black' : 'text-gray-400')} />
                <div className="text-xs tracking-wide whitespace-nowrap">{category.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
