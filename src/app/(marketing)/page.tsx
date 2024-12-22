import {
  Features,
  Hero,
  HowItWorks,
  Newsletter,
  Pricing,
  Testimonials,
} from "./_components";

const HomePage = () => {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-12">
      {/* Hero */}
      <Hero />

      {/* How it works */}
      <HowItWorks />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </section>
  );
};

export default HomePage;
