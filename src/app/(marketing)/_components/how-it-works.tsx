import { Container, Heading, Wrapper } from "@/components";
import { perks } from "@/constants";

const HowItWorks = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Heading
        sectionTitle="The Process"
        mainTitle="Three steps to build your dream website"
        description="Turn your vision into reality in just 3 simple steps"
      />

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center">
                  <perk.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default HowItWorks;
