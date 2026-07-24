import Link from 'next/link';
import { Button } from '@airbnb/ui';
import { ROUTES } from '@airbnb/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      <header className="border-b border-gray-200 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-rose-500">Airbnb Clone</div>
          <div className="flex gap-4">
            <Link href={ROUTES.SIGN_IN}>
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href={ROUTES.SIGN_UP}>
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Find Your Next Home
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover unique places to stay and experiences around the world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href={ROUTES.SEARCH}>
                <Button size="lg" variant="primary">
                  Explore Listings
                </Button>
              </Link>
              <Link href={ROUTES.HOST.DASHBOARD}>
                <Button size="lg" variant="outline">
                  Become a Host
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Search Listings',
                description: 'Browse thousands of listings worldwide',
                icon: '🏠',
              },
              {
                title: 'Book Instantly',
                description: 'Secure your stay with instant booking',
                icon: '✓',
              },
              {
                title: 'Connect with Hosts',
                description: 'Message hosts and get personalized recommendations',
                icon: '💬',
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
