import { Container, Heading, Wrapper } from "@/components";
import Marquee from "@/components/ui/marquee";
import { reviews } from "@/constants";
import { User } from "lucide-react";

const Testimonials = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Heading
        sectionTitle="Our Customers"
        mainTitle="What people are saying"
        description="See how Astra empowers business of all sizes. Here's what real people are saying on Twitter"
      />

      <Container>
        <div className="py-10 md:py-20 w-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
            <Marquee pauseOnHover className="[--duration:20s] select-none">
              {firstRow.map((review) => (
                <figure
                  key={review.name}
                  className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15] "
                >
                  <div className="flex flex-row items-center gap-2">
                    <User className="size-6" />

                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium">
                        {review.name}
                      </figcaption>

                      <p className="text-sm font-medium text-muted-foreground">
                        {review.username}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-2 text-sm">
                    {review.body}
                  </blockquote>
                </figure>
              ))}
            </Marquee>

            <Marquee
              reverse
              pauseOnHover
              className="[--duration:20s] select-none"
            >
              {secondRow.map((review) => (
                <figure
                  key={review.name}
                  className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15] "
                >
                  <div className="flex flex-row items-center gap-2">
                    <User className="size-6" />

                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium">
                        {review.name}
                      </figcaption>

                      <p className="text-sm font-medium text-muted-foreground">
                        {review.username}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-2 text-sm">
                    {review.body}
                  </blockquote>
                </figure>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
