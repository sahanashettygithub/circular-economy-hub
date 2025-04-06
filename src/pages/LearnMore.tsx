
import { BookOpen, FileText, Video, BookMarked, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn More</h1>
            <p className="text-lg text-gray-600">
              Explore our resources to learn more about waste management, recycling, and sustainable practices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-eco-primary" /> Guides & Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Step-by-step guides on how to use the platform, manage waste effectively, and implement sustainable practices.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Browse Guides</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="text-eco-primary" /> Video Tutorials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Watch video demonstrations on donation, selling, and buying processes on our platform.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Watch Videos</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-eco-primary" /> Case Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Real-world examples of how our platform has helped communities reduce waste and create value.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Read Case Studies</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="text-eco-primary" /> Educational Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Articles, research papers, and other resources on waste management and environmental sustainability.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Access Resources</Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I donate items?</h3>
                <p className="text-gray-600">
                  To donate items, create an account, select the "Donate" option, fill out the donation form with details about your items, and submit. Receivers in your area will be able to see your donation and request it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What can I donate?</h3>
                <p className="text-gray-600">
                  You can donate food items, clothes, and vegetable waste. Each category has specific guidelines to ensure quality and safety for receivers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How do Eco Points work?</h3>
                <p className="text-gray-600">
                  Eco Points are earned when you sell old clothes through our platform. For every 1 KG of clothes sold, you earn 10 Eco Points. These points can be redeemed for discounts on products in our Eco Store.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">I'm a factory owner. How can I use the platform?</h3>
                <p className="text-gray-600">
                  Register as a Buyer, browse available clothing listings, and arrange pickups. You can also list recycled products you create in our Eco Store.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10" asChild>
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              Connect with like-minded individuals and organizations passionate about sustainability and waste reduction.
            </p>
            <Card className="shadow-md p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Users className="h-8 w-8 text-eco-primary" />
                <h3 className="text-xl font-semibold">Community Forums</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Share ideas, ask questions, and learn from others in our community forums.
              </p>
              <Button className="bg-eco-primary hover:bg-eco-secondary">Join Forums</Button>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearnMore;
