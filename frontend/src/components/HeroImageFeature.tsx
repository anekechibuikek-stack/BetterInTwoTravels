import type { CSSProperties, ReactNode } from 'react';
import SizedImage from './SizedImage';

export type HeroImageFeatureProps = {
  /** URL or path to the image (e.g. `/images/beachPhoto.jpg`). */
  imageSrc: string;
  /** Body / marketing copy beside the image. */
  description: string;
  imageWidth: CSSProperties['width'];
  imageHeight: CSSProperties['height'];
  imageAlt?: string;
  headlinePrimary?: string;
  headlineAccent?: string;
};

function HeroImageFeature({
  imageSrc,
  description,
  imageWidth,
  imageHeight,
  imageAlt = '',
  headlinePrimary = 'Escape the',
  headlineAccent = ' Ordinary',
}: HeroImageFeatureProps): ReactNode {
  return (
    <div className="col-span-12 flex w-full min-w-0 flex-col gap-6 px-3 py-2 sm:px-4 lg:col-start-2 lg:col-span-10 lg:flex-row lg:items-start lg:gap-8 lg:p-4 lg:min-h-[min(500px,70vh)]">
      <div
        className="relative aspect-5/3 w-full max-h-[min(50vh,420px)] shrink-0 overflow-hidden rounded-2xl sm:mx-auto sm:max-w-xl lg:mx-0 lg:aspect-auto lg:h-[min(420px,70vh)] lg:max-h-[420px] lg:w-full lg:max-w-[min(100%,600px)]"
        style={{
          maxWidth:
            typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth ?? undefined,
          maxHeight:
            typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight ?? undefined,
        }}
      >
        <SizedImage
          src={imageSrc}
          alt={imageAlt}
          width="100%"
          height="100%"
          objectFit="cover"
          className="absolute inset-0 size-full rounded-2xl"
        />
      </div>
      <div className="min-w-0 flex-1 lg:p-8">
        <div className="mb-4 flex flex-wrap gap-x-2 sm:mb-6 lg:mb-8">
          <span className="text-4xl font-bold text-black text-shadow-gray sm:text-5xl lg:text-6xl">
            {headlinePrimary}
          </span>
          <span className="text-4xl font-bold text-blue-500 text-shadow-gray sm:text-5xl lg:text-6xl">
            {headlineAccent}
          </span>
        </div>

        <p className="mt-4 text-base text-gray-800 text-shadow-gray sm:mt-6 sm:text-lg lg:mt-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeroImageFeature;
