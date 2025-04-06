
import { useState } from "react";
import { Filter, ShoppingBag } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample product data
const products = [
  {
    id: 1,
    name: "Recycled Cotton T-Shirt",
    description: "Made from 100% recycled cotton fabric",
    price: 24.99,
    discountedPrice: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
    category: "Clothing",
    pointsRequired: 50,
  },
  {
    id: 2,
    name: "Eco-Friendly Notebook",
    description: "Handcrafted from recycled paper",
    price: 12.99,
    discountedPrice: 9.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80",
    category: "Stationery",
    pointsRequired: 30,
  },
  {
    id: 3,
    name: "Recycled Plastic Backpack",
    description: "Durable backpack made from recycled plastic bottles",
    price: 49.99,
    discountedPrice: 39.99,
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&q=80",
    category: "Accessories",
    pointsRequired: 100,
  },
  {
    id: 4,
    name: "Upcycled Denim Jacket",
    description: "Stylish jacket made from upcycled denim",
    price: 79.99,
    discountedPrice: 65.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80",
    category: "Clothing",
    pointsRequired: 150,
  },
  {
    id: 5,
    name: "Recycled Glass Water Bottle",
    description: "Sustainable water bottle made from recycled glass",
    price: 18.99,
    discountedPrice: 15.99,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80",
    category: "Home",
    pointsRequired: 40,
  },
  {
    id: 6,
    name: "Eco-Friendly Yoga Mat",
    description: "Made from natural rubber and recycled materials",
    price: 45.99,
    discountedPrice: 39.99,
    image: "https://images.unsplash.com/photo-1545205597-3d9d1c4be103?auto=format&fit=crop&q=80",
    category: "Fitness",
    pointsRequired: 90,
  }
];

const categories = ["All", "Clothing", "Stationery", "Accessories", "Home", "Fitness"];

const EcoStore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const userPoints = 100; // Simulated user eco points

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Eco Store</h1>
            <p className="text-lg text-gray-600">
              Shop sustainable products made from recycled materials and use your eco points for discounts.
            </p>
          </div>

          {/* User points indicator */}
          <div className="mb-8 p-4 bg-eco-primary/10 rounded-lg flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="font-medium">Your Eco Points</p>
              <p className="text-2xl font-bold text-eco-primary">{userPoints} points</p>
            </div>
            <div>
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10">
                How to Earn More Points
              </Button>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-eco-primary hover:bg-eco-secondary" 
                  : "border-gray-200 hover:border-eco-primary hover:text-eco-primary"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
            <Button variant="ghost" className="gap-2 ml-auto">
              <Filter className="h-4 w-4" /> Advanced Filter
            </Button>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="outline" className="bg-eco-primary/10 text-eco-primary border-eco-primary">
                      {product.pointsRequired} points
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.discountedPrice}</span>
                    <span className="text-gray-500 line-through text-sm">${product.price}</span>
                    <span className="text-eco-primary text-sm">
                      Save {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                    </span>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="pt-4">
                  <Button className="w-full gap-2 bg-eco-primary hover:bg-eco-secondary">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default EcoStore;
