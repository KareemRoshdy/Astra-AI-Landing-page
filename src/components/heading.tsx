import Container from "./global/container";
import SectionBadge from "./ui/section-badge";

interface HeadingProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
}

const Heading = ({ sectionTitle, mainTitle, description }: HeadingProps) => {
  return (
    <Container>
      <div className="max-w-md md:mx-auto text-start md:text-center">
        <SectionBadge title={sectionTitle} />

        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">{mainTitle}</h2>

        <p className="text-muted-foreground mt-6">{description}</p>
      </div>
    </Container>
  );
};

export default Heading;
