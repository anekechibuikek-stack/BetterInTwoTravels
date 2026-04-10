import type { ReactNode } from 'react';
import SizedImage from '@/components/SizedImage';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export type MyCarouselImage = {
  src: string;
  alt: string;
};

export type MyCarouselProps = {
  name: string;
  description: string;
  days: number;
  srcs: MyCarouselImage[];
  /** Star rating label (e.g. 4.5). */
  rating?: number;
  /** Pixel height for each slide image. */
  imageHeightPx?: number;
  className?: string;
};

const navOnImage =
  'top-1/2 z-30 -translate-y-1/2 border-white/40 bg-black/45 text-white shadow-md backdrop-blur-[2px] hover:bg-black/60 hover:text-white';

export function MyCarousel({
  name,
  description,
  days,
  srcs,
  rating = 4.5,
  imageHeightPx = 500,
  className,
}: MyCarouselProps): ReactNode {
  return (
    <Carousel className={className ?? 'mx-auto w-full max-w-xl'}>
      <div className="relative">
        <CarouselContent>
          {srcs.map((img, index) => (
            <CarouselItem key={`${img.src}-${index}`}>
              <div className="p-4">
                <SizedImage
                  src={img.src}
                  alt={img.alt}
                  width="100%"
                  height={imageHeightPx}
                  objectFit="cover"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={`left-4 ${navOnImage}`} />
        <CarouselNext className={`right-4 ${navOnImage}`} />

        {/* One static overlay for the whole carousel — images scroll underneath */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 pt-6 md:p-6">
          <div className="flex justify-end">
            <div className="rounded-full border border-white/35 bg-black/55 px-3 py-1 text-sm font-medium text-white shadow-sm backdrop-blur-[2px]">
              <span className="tabular-nums">{days}</span>
              <span> days</span>
            </div>
          </div>

          <div className="space-y-2 rounded-b-xl bg-linear-to-t from-black/85 via-black/50 to-transparent px-2 pb-4 pt-16 md:px-4 md:pb-6 md:pt-20">
            <div className="flex flex-row items-center gap-2">
              <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
              <span className="text-xl font-bold text-white">{rating}</span>
            </div>
            <div className="inline-block rounded-md bg-black/50 px-3 py-1 font-georgia text-2xl font-bold text-white shadow-sm backdrop-blur-sm">
              {name}
            </div>
            <p className="max-w-prose text-lg font-semibold leading-snug text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
