import { Footer, Navbar } from "@/components";
import { currentUser } from "@clerk/nextjs/server";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = async ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
