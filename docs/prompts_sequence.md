# Sequence of Prompts: AI-Assisted Development

This document outlines the sequence of developer prompts used to guide the AI coding assistant in building this pixel-perfect Airbnb Clone.

---

## Phase 1: Planning and Research

### Prompt 1: Initial Design Review
> "I need to build a pixel-perfect Airbnb listing page clone matching the visual style, layout, spacing, and animations of the reference website: https://airbnb-clone-umber-two.vercel.app. First, inspect the current codebase and project structures to determine what files exist and how they are organized."

---

## Phase 2: Router Migration & Layout Refactoring

### Prompt 2: Routing Structure and Listing Detail Page
> "Move the current static listing details page component from the root route `/` to a dynamic routing structure at `/listing/[id]`. Use the `useParams` hook from `next/navigation` to dynamically fetch the listing details based on the URL parameter, falling back to a default mock listing if not found. Make sure all imports and styles remain compatible."

### Prompt 3: Mock Data Database Expansion
> "Expand the mock data file `src/data/listing.ts` to export an array `mockListings` of 9 distinct listings. Each listing should include realistic attributes (prices, unique locations like Malibu, Santorini, Oslo, reviews counts, ratings, host details, and multiple Unsplash image URLs for image carousels) and represent a specific category (e.g., Beachfront, Cabins, Trending, Islands, Design, Amazing Pools, Mansions)."

---

## Phase 3: Component Engineering

### Prompt 4: Categories Navigation Component
> "Create a horizontal scrolling category filter bar component at `src/components/layout/Categories.tsx`. It should render icons (Trending, Beachfront, Cabins, Islands, Design, Amazing Pools, Mansions) using `lucide-react` icons. Implement selection callbacks that toggle selected filters and show an active black underline style."

### Prompt 5: Listing Card Carousel Component
> "Create a reusable `ListingCard` component at `src/components/listing/ListingCard.tsx`. The card must render:
> 1. An image container with a custom hover-revealed image carousel (left/right navigation arrows, pagination dots tracking active indices).
> 2. A wishlist heart button in the top right that toggles color state (rose-500 fill) on click without triggering navigation.
> 3. Standard text fields including bold location, host label, date range, and bold nightly prices.
> 4. Anchor wrapper that navigates to `/listing/[id]` when clicked."

### Prompt 6: Interactive Search Modal
> "Create a floating `SearchModal` overlay component in `src/components/overlay/SearchModal.tsx` displaying search parameters for Destination inputs and Guest counts. Provide clear callbacks to bubble the search parameters back to parent layers."

### Prompt 7: Refined Navigation Header
> "Update the navigation bar in `src/components/layout/Header.tsx` to center the search trigger component, showing three segments ('Anywhere', 'Any week', 'Add guests') and a round search icon in a rose background. Add an interactive user dropdown menu when clicking the profile menu."

---

## Phase 4: Integration and Layout Fine-Tuning

### Prompt 8: Homepage Assembly
> "Update the main homepage at `src/app/page.tsx` to stitch everything together:
> 1. Render `<Header>` and connect search callbacks.
> 2. Render `<Categories>` filter bar.
> 3. Map filtered `mockListings` to a responsive desktop grid.
> 4. Add a beautiful empty state when no listings match filters, complete with a 'Clear Filters' trigger.
> 5. Render `<Footer>`."

### Prompt 9: Clean Unused Code & Verify Build
> "Scan the project code files for unused variables, unused imports, or indexing type warnings to satisfy the strict TypeScript compiler configuration (`noUnusedLocals`). Run the TypeScript checks (`pnpm --filter web type-check`) and then build the production bundle (`pnpm --filter web build`) to confirm compilation succeeds with zero errors."
