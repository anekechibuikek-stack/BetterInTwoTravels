import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export type AvatarDemoProps = {
  src: string
  alt?: string
  fallback?: string
}

export function AvatarDemo({
  src,
  alt = "",
  fallback = "CN",
}: AvatarDemoProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} className="grayscale" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
