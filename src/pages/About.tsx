
import { InfoIcon, Leaf, Recycle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Waste to Worth</h1>
            <p className="text-lg text-gray-600">
              Learn about our mission to transform waste into valuable resources through sustainable practices.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Waste to Worth is a platform dedicated to creating a circular economy by connecting donors, receivers, 
              sellers, and buyers in a sustainable ecosystem that reduces waste and promotes recycling.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that what's waste for one person can be a valuable resource for another. Through our platform, 
              we facilitate the redistribution of food, clothes, and vegetable waste to those who need them or can 
              transform them into something valuable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-eco-primary" /> Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  By facilitating the donation and recycling of items that would otherwise go to landfills, 
                  we're helping reduce greenhouse gas emissions and conserve natural resources.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="text-eco-primary" /> Circular Economy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We promote a circular economy where products are reused, repurposed, and recycled, 
                  extending their lifecycle and reducing the need for new raw materials.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <InfoIcon className="text-eco-primary" /> Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our platform brings together individuals, organizations, and businesses in a 
                  collaborative effort to build more sustainable communities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">For Donors</h3>
                <p className="text-gray-600">
                  List your excess food, unused clothes, or vegetable waste on our platform. 
                  We'll connect you with receivers in your area who can put them to good use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">For Receivers</h3>
                <p className="text-gray-600">
                  Browse available donations near you and request items you need. 
                  From food banks to individuals, anyone can benefit from the platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">For Sellers</h3>
                <p className="text-gray-600">
                  Sell your old clothes and earn Eco Points that can be redeemed for discounts 
                  on products in our Eco Store.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">For Buyers</h3>
                <p className="text-gray-600">
                  Factories and recycling businesses can source materials directly from individuals, 
                  cutting out middlemen and ensuring a steady supply of recyclable materials.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Join Our Mission</h2>
            <p className="text-gray-600">
              Whether you're looking to donate, receive, sell, or buy, Waste to Worth has something for you. 
              Join us in our mission to create a more sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-eco-primary hover:bg-eco-secondary" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10" asChild>
                <Link to="/learn-more">Learn More</Link>
              </Button>
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
