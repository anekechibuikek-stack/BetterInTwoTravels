import type { MyCarouselProps } from '@/components/MyCarousel';
import type { ReviewItem } from '@/components/Reviews';

const img = {
  beach: { src: '/images/beachPhoto.jpg', alt: 'Beach Photo' },
  maldives: { src: '/images/Maldives-scaled.jpg', alt: 'Maldives' },
  somewhere: { src: '/images/somewhere.jpg', alt: 'Somewhere' },
  tropical: {
    src: '/images/tropical-getaway__ResizedImageWzYwMCw0NTBd.png',
    alt: 'Tropical Getaway',
  },
  valentines: {
    src: '/images/valentines-day-getaways.jpg',
    alt: 'Valentines Getaway',
  },
} as const;

export const sampleCarouselPackage: MyCarouselProps = {
  name: 'World Explorer',
  description:
    'Embark on an unforgettable journey across the globe. Discover iconic cities, immerse yourself in diverse cultures, and collect memories you’ll cherish forever.',
  days: 12,
  srcs: [img.beach, img.maldives, img.somewhere, img.tropical, img.valentines],
};

export const sampleCarouselPackage2: MyCarouselProps = {
  name: 'Island Escape',
  description:
    'Relax by crystal-clear water, explore hidden beaches, and enjoy peaceful island evenings.',
  days: 8,
  srcs: [img.valentines, img.tropical, img.beach, img.maldives, img.somewhere],
};

export const sampleCarouselPackage3: MyCarouselProps = {
  name: 'Luxury Retreat',
  description:
    'Stay in breathtaking resorts with curated experiences, premium dining, and unforgettable views.',
  days: 10,
  srcs: [img.somewhere, img.valentines, img.maldives, img.tropical, img.beach],
};

export const sampleReviews: ReviewItem[] = [
  {
    firstName: 'Ada',
    lastName: 'Byron',
    country: 'United Kingdom',
    review: 'Amazing itinerary and smooth booking process from start to finish.',
    rating: 5,
    avatarSrc: 'https://github.com/shadcn.png',
  },
  {
    firstName: 'Liam',
    lastName: 'Chen',
    country: 'Canada',
    review:
      'The local recommendations were perfect and saved us so much time. The local recommendations were perfect and saved us so much time. ',
    rating: 4,
    avatarSrc: 'https://github.com/shadcn.png',
  },
  {
    firstName: 'Amara',
    lastName: 'Okafor',
    country: 'Nigeria',
    review: 'Great support and excellent value. We are definitely booking again.',
    rating: 5,
    avatarSrc: 'https://github.com/shadcn.png',
  },
  {
    firstName: 'Liam',
    lastName: 'Chen',
    country: 'Canada',
    review:
      'The local recommendations were perfect and saved us so much time. The local recommendations were perfect and saved us so much time. ',
    rating: 4,
    avatarSrc: 'https://github.com/shadcn.png',
  },
];
