
import { Leaf, Apple, Carrot } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Receive = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Receive Donations</h1>
            <p className="text-lg text-gray-600">
              Browse available donations near you and request items you need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="text-eco-primary" /> Food Donations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Browse available food donations from restaurants, events, and individuals in your area.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Browse Food</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-eco-primary" /> Clothes Donations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Find clothes donations from individuals and organizations in your community.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Browse Clothes</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Carrot className="text-eco-primary" /> Vegetable Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Access vegetable waste for composting, animal feed, or other sustainable uses.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Browse Waste</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Are you an organization?</h2>
            <p className="mb-4">
              If you represent a non-profit, school, shelter, or other organization that can receive bulk donations, register as an organization to get priority access.
            </p>
            <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10">
              Register as Organization
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Receive;
