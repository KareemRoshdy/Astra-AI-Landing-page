import { Container, Heading, Icons, Wrapper } from "@/components";
import { features } from "@/constants";

const Features = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Heading
        sectionTitle="Features"
        mainTitle="Discover our powerful features"
        description="Astra offers a range of features to help you build a stunning website in on time"
      />

      <Container>
        <div className="flex items-center justify-center mx-auto mt-8">
          <Icons.feature className="w-auto h-80" />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start px-0"
              >
                <div className="flex items-center justify-center">
                  <feature.icon className="size-8" />
                </div>

                <h3 className="text-lg font-medium mt-4">{feature.title}</h3>

                <p className="text-muted-foreground mt-2 text-start">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Features;
