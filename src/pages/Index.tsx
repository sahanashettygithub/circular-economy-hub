
import { Apple, Book, Leaf, Recycle, ShoppingBag, ShoppingCart, Truck, Users } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import CategoryCard from "@/components/home/CategoryCard";
import FeatureSection from "@/components/home/FeatureSection";
import ImpactCounter from "@/components/home/ImpactCounter";
import TestimonialCard from "@/components/home/TestimonialCard";
import CallToAction from "@/components/home/CallToAction";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="Turning Waste into Worth"
        subtitle="Join our sustainable ecosystem that connects people to reduce waste and create value through donation, recycling, and reuse."
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
        primaryCta={{ text: "Get Started", link: "/register" }}
        secondaryCta={{ text: "Learn More", link: "/about" }}
        stats={[
          { value: "10K+", label: "Active Users" },
          { value: "25T", label: "Waste Recycled" },
          { value: "45K", label: "Donations Made" },
          { value: "18K", label: "Items Sold" },
        ]}
      />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Would You Like to Participate?</h2>
            <p className="text-lg text-gray-600">
              Whether you want to donate, receive, sell, or buy, Waste to Worth offers multiple ways to participate in the circular economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Donate Food"
              description="Reduce food waste by donating excess food to those who need it most."
              icon={<Apple />}
              link="/donate/food"
              color="#4CAF50"
            />
            <CategoryCard
              title="Donate Clothes"
              description="Give your old clothes a new life and help someone in need."
              icon={<Leaf />}
              link="/donate/clothes"
              color="#FF9800"
            />
            <CategoryCard
              title="Sell to Recyclers"
              description="Sell your old clothes to recycling factories and earn eco points."
              icon={<Recycle />}
              link="/sell"
              color="#2196F3"
            />
            <CategoryCard
              title="Shop Eco Store"
              description="Buy products made from recycled materials at our eco store."
              icon={<ShoppingBag />}
              link="/eco-store"
              color="#9C27B0"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection
        title="Why Choose Waste to Worth"
        subtitle="Our platform offers a comprehensive solution to waste management through a circular economy model."
        features={[
          {
            title: "Reduce Waste",
            description: "Help reduce landfill waste by donating or selling items instead of throwing them away.",
            icon: <Recycle className="h-6 w-6" />,
          },
          {
            title: "Community Impact",
            description: "Make a real difference in your community by helping those in need.",
            icon: <Users className="h-6 w-6" />,
          },
          {
            title: "Earn Eco Points",
            description: "Get rewarded with eco points that can be redeemed for discounts on recycled products.",
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            title: "Easy Logistics",
            description: "Our platform makes item pickup and delivery easy and convenient.",
            icon: <Truck className="h-6 w-6" />,
          },
          {
            title: "Educational Resources",
            description: "Learn about sustainable practices and the impact of waste reduction.",
            icon: <Book className="h-6 w-6" />,
          },
          {
            title: "Shop Sustainably",
            description: "Browse and purchase products made from recycled materials in our eco store.",
            icon: <ShoppingCart className="h-6 w-6" />,
          },
        ]}
        reversed={true}
      />

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-lg text-gray-600">
              Together, we're making significant progress in reducing waste and creating a more sustainable future.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 my-12">
            <ImpactCounter startValue={0} endValue={10562} label="Active Users" />
            <ImpactCounter startValue={0} endValue={25} label="Tons of Waste Recycled" suffix="T" />
            <ImpactCounter startValue={0} endValue={45321} label="Donations Made" />
            <ImpactCounter startValue={0} endValue={18754} label="Items Sold" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">
              Hear from people who are already making a difference with Waste to Worth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I've been able to reduce my food waste significantly by donating excess food to those who need it. The platform is so easy to use!"
              author="Sarah Johnson"
              role="Food Donor"
              rating={5}
            />
            <TestimonialCard
              quote="As a factory owner, I've been able to source high-quality recyclable materials directly from people, cutting out the middleman."
              author="Michael Chen"
              role="Recycling Factory Owner"
              rating={4}
            />
            <TestimonialCard
              quote="The eco points system is brilliant! I've earned enough points to get significant discounts on recycled products in the eco store."
              author="James Wilson"
              role="Regular Seller"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Make a Difference?"
        description="Join thousands of people who are already part of the Waste to Worth community and start making a positive impact today."
        primaryCta={{ text: "Sign Up Now", link: "/register" }}
        secondaryCta={{ text: "Learn More", link: "/about" }}
        background="primary"
      />
    </MainLayout>
  );
};

export default Index;
