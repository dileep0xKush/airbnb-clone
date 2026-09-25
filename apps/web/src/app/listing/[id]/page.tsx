'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/components/layout';
import { Container } from '@/components/common';
import {
  HeroGallery,
  ListingHeader,
  PropertyInfo,
  Amenities,
  SleepingArrangements,
  HostCard,
  Reviews,
  Location,
  ThingsToKnow,
  BookingCard,
} from '@/components/listing';
import { PhotoTour, Lightbox } from '@/components/overlay';
import { mockListing, mockListings } from '@/data/listing';

export default function ListingDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  // Find the specific listing or fall back to standard mockListing
  const listing = mockListings?.find((l) => l.id === id) || mockListing;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <Container className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <HeroGallery images={listing.images} />
              <ListingHeader
                id={listing.id}
                title={listing.title}
                location={listing.location}
                rating={listing.rating}
                reviews={listing.reviews}
                isGuestFavorite={listing.isGuestFavorite}
              />
              <PropertyInfo
                guests={listing.guests}
                bedrooms={listing.bedrooms}
                beds={listing.beds}
                bathrooms={listing.bathrooms}
              />
              <HostCard
                host={listing.host}
                description={listing.aboutSection}
              />
              <Amenities amenities={listing.amenities} />
              <SleepingArrangements bedrooms={listing.bedrooms_data} />
              <Reviews
                reviews={listing.reviews_data}
                overallRating={listing.rating}
              />
              <Location
                location={listing.location}
                latitude={listing.latitude}
                longitude={listing.longitude}
              />
              <ThingsToKnow
                houseRules={listing.houseRules}
                safetyFeatures={listing.safetyFeatures}
                cancellationPolicy={listing.cancellationPolicy}
              />
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <BookingCard
                id={listing.id}
                price={listing.price}
                rating={listing.rating}
                reviews={listing.reviews}
                cleaningFee={listing.cleaningFee}
                serviceFee={listing.serviceFee}
                taxFee={listing.taxFee}
              />
            </div>
          </div>
        </Container>
      </main>

      {/* Overlays */}
      <PhotoTour images={listing.images} />
      <Lightbox images={listing.images} />
    </>
  );
}
