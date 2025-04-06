
import { ShoppingBag, TrendingUp, Shield } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Buy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Buy Recyclable Materials</h1>
            <p className="text-lg text-gray-600">
              Connect with sellers and purchase materials for your recycling business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-10">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-2">
                  <ShoppingBag className="h-6 w-6 text-eco-primary" />
                </div>
                <CardTitle>Diverse Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect directly with individuals selling recyclable materials, cutting out middlemen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-eco-primary" />
                </div>
                <CardTitle>Steady Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access a consistent stream of materials for your recycling or manufacturing needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-eco-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-eco-primary" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All materials are reviewed and categorized to ensure they meet your requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-eco-primary/5 p-8 rounded-lg mb-10">
            <h2 className="text-2xl font-bold mb-4">Factory Registration</h2>
            <p className="mb-4">
              Register your factory or recycling business to gain access to our network of sellers.
              Get verified as a legitimate buyer and start purchasing materials immediately.
            </p>
            <Button className="bg-eco-primary hover:bg-eco-secondary">Register as a Buyer</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Browse Available Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Search through listings of recyclable materials available in your area.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Browse Materials</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Post Material Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Let sellers know what materials you're looking for and what prices you're offering.
                </p>
                <Button className="w-full bg-eco-primary hover:bg-eco-secondary">Post Requirements</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Buy;
