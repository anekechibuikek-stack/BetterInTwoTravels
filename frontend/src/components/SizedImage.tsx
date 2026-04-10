import type { CSSProperties, ImgHTMLAttributes, ReactNode } from 'react';

export type SizedImageProps = {
  src: string;
  alt: string;
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  className?: string;
  objectFit?: CSSProperties['objectFit'];
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'className' | 'height' | 'src' | 'width'>;

function SizedImage({
  src,
  alt,
  width,
  height,
  className = 'rounded-2xl shrink-0',
  objectFit = 'fill',
  style,
  ...rest
}: SizedImageProps): ReactNode {
  return (
    <img
      src={src}
      alt={alt}
      width={typeof width === 'number' ? width : undefined}
      height={typeof height === 'number' ? height : undefined}
      className={className}
      style={{ width, height, objectFit, ...style }}
      {...rest}
    />
  );
}

export default SizedImage;
