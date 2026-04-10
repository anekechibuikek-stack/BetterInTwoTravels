import React from 'react';
import HeroImageFeature from '../components/HeroImageFeature';
import { MyCarousel } from '../components/MyCarousel';
import SearchBar from '../components/SearchBar';
import { ArrowRight, Earth, Aperture, SquarePlay } from 'lucide-react';
import { Reviews } from '../components/Reviews';
import {
  sampleCarouselPackage,
  sampleCarouselPackage2,
  sampleCarouselPackage3,
  sampleReviews,
} from '../lib/dummyData';

function Home(): React.ReactNode {
  return (
    <div className="grid w-full min-w-0 grid-cols-12 gap-4 gap-y-6 p-2 sm:p-3 md:gap-6">
      {/* Example component positions */}

      <div className="col-span-12 min-h-[90px] w-full min-w-0 rounded-3xl bg-white p-3 shadow sm:p-4 md:col-start-2 md:col-span-10 md:px-4">
        <SearchBar />
      </div>

      <HeroImageFeature
        imageSrc="/images/beachPhoto.jpg"
        imageAlt="Beach destination"
        imageWidth={600}
        imageHeight={420}
        description="Break free from the pressures of work, school, and everyday routines. Immerse yourself in breathtaking landscapes, explore hidden gems, and embark on adventures designed to inspire and recharge you. From curated expeditions to hand-picked gear and local experiences, we make it easy to plan the getaway you've been dreaming of. Book your next adventure today — the world is waiting."
      />

      <div className="col-span-12 min-w-0 md:col-start-2 md:col-span-10">
        <div className="flex w-full flex-col space-y-4 p-1 sm:space-y-2 sm:p-2">
          <span className="text-3xl font-bold sm:text-4xl">Trending Destinations</span>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex flex-col text-gray-500">
              <p className="text-sm sm:text-base">The most sort after destinations this season</p>
            </div>

            <a
              href="#"
              className="flex items-center text-blue-600 underline hover:text-blue-800"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
        <div className="mt-4 flex min-w-0 flex-col gap-6 px-0 lg:flex-row lg:items-start lg:gap-8 lg:space-x-0">
          <div className="min-w-0 flex-1">
            <MyCarousel {...sampleCarouselPackage} className="mx-auto w-full max-w-full" />
          </div>
          <div className="min-w-0 flex-1">
            <MyCarousel {...sampleCarouselPackage2} className="mx-auto w-full max-w-full" />
          </div>
          <div className="min-w-0 flex-1">
            <MyCarousel {...sampleCarouselPackage3} className="mx-auto w-full max-w-full" />
          </div>
        </div>
      </div>

      <div className="col-span-12 w-full min-w-0 p-3 sm:p-4 md:col-start-2 md:col-span-10">
        <Reviews reviews={sampleReviews} />
      </div>

      <div className="col-span-12 w-full min-w-0 p-3 sm:p-4 md:col-start-2 md:col-span-10">
        <div className="flex min-h-80 flex-col items-stretch justify-center rounded-2xl border-2 border-border bg-card text-card-foreground shadow-lg sm:min-h-96">
          <div className="grid min-h-0 w-full grid-cols-1 gap-6 overflow-auto p-3 sm:p-4 md:grid-cols-10 md:gap-4">
            <div className="min-w-0 md:col-span-4">
              <div className="flex flex-col space-y-4 pl-0 sm:pl-2 md:pl-3">
                <div className="flex flex-row items-center justify-start space-x-2">
                  <img src="/vite.svg" alt="vite" className="h-8 w-auto sm:h-10" />
                  <span className="text-xl font-bold sm:text-2xl">Travels</span>
                </div>
                <span className="max-w-md text-sm font-serif italic tracking-wide text-gray-500 sm:text-base">
                  Explore the world with us. Connecting thrill-seekers with the world's most
                  exciting destinations. Experts-led, Safety-first, memory-forever.
                </span>

                <div className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4">
                  <Earth className="h-10 w-10 shrink-0 rounded-full bg-gray-200 p-2 text-gray-500 sm:h-12 sm:w-12" />
                  <Aperture className="h-10 w-10 shrink-0 rounded-full bg-gray-200 p-2 text-gray-500 sm:h-12 sm:w-12" />
                  <SquarePlay className="h-10 w-10 shrink-0 rounded-full bg-gray-200 p-2 text-gray-500 sm:h-12 sm:w-12" />
                </div>
              </div>
            </div>

            <div className="min-w-0 md:col-span-2">
              <span className="text-xl font-bold sm:text-2xl">Explore</span>
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-gray-500">Destinations</span>
                <span className="text-sm text-gray-500">Activities</span>
                <span className="text-sm text-gray-500">Gear Rental</span>
                <span className="text-sm text-gray-500">Expeditions</span>
              </div>
            </div>

            <div className="min-w-0 md:col-span-2">
              <span className="text-xl font-bold sm:text-2xl">Support</span>
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-gray-500">Safety Guide</span>
                <span className="text-sm text-gray-500">Insurance</span>
                <span className="text-sm text-gray-500">FAQ</span>
                <span className="text-sm text-gray-500">Contract</span>
              </div>
            </div>

            <div className="min-w-0 md:col-span-2">
              <span className="text-xl font-bold sm:text-2xl ">Legal</span>
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-gray-500">privacy Policy</span>
                <span className="text-sm text-gray-500">Terms of Service</span>
                <span className="text-sm text-gray-500">Cookie Policy</span>
                <span className="text-sm text-gray-500">Legal Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="col-span-12 mt-2 border-t border-gray-200 py-6 sm:mt-4 md:col-start-2 md:col-span-10">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 sm:justify-start sm:gap-8">
          <a href="#" className="hover:text-gray-900">
            Explore
          </a>
          <a href="#" className="hover:text-gray-900">
            Support
          </a>
          <a href="#" className="hover:text-gray-900">
            Legal
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

