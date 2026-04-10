import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export type ReviewItem = {
  firstName: string
  lastName: string
  country: string
  review: string
  rating: number
  avatarSrc?: string
}

type ReviewsProps = {
  reviews: ReviewItem[]
}

function initials(first: string, last: string) {
  const a = first.trim().charAt(0)
  const b = last.trim().charAt(0)
  return [a, b].filter(Boolean).join("") || "?"
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent className="items-stretch">
        {reviews.map((review, index) => (
          <CarouselItem
            key={`${review.firstName}-${review.lastName}-${index}`}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="flex h-full min-h-0 min-w-0 px-1 sm:px-2">
              <div className="flex min-h-0 w-full flex-col rounded-2xl border-2 border-border bg-card text-card-foreground shadow-lg">
                <div className="flex min-h-0 flex-1 flex-col gap-4 px-3 pt-4 sm:gap-6 sm:px-5">
                  <div className="flex shrink-0 flex-row items-center justify-start pl-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 shrink-0 fill-yellow-500 text-yellow-500 sm:h-5 sm:w-5" />
                    ))}
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-0.5">
                    <p className="max-w-full text-center text-base italic leading-relaxed text-gray-600 wrap-break-word sm:text-lg md:max-w-sm lg:max-w-md">
                      {"\""}
                      {review.review}
                      {"\""}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex shrink-0 flex-row items-center gap-3 border-t border-border/60 p-4 sm:p-5">
                  <Avatar className="-mt-7">
                    <AvatarImage src={review.avatarSrc} className="h-13 w-13" />
                    <AvatarFallback className="text-xs">
                      {initials(review.firstName, review.lastName)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex flex-1 flex-col items-start">
                    <span className="text-lg font-bold leading-tight sm:text-medium">
                      {review.firstName} {review.lastName}
                    </span>
                    <span className="text-sm font-light text-gray-500 sm:text-base">{review.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:-left-12" />
      <CarouselNext className="right-2 sm:-right-12" />
    </Carousel>
  )
}
