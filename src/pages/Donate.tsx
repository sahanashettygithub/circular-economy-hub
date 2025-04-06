
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, MapPin, Upload } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const Donate = () => {
  const [foodImage, setFoodImage] = useState<string | null>(null);
  const [clothesImage, setClothesImage] = useState<string | null>(null);
  const [vegetableImage, setVegetableImage] = useState<string | null>(null);
  
  const [foodDate, setFoodDate] = useState<Date | undefined>(undefined);
  const [clothesDate, setClothesDate] = useState<Date | undefined>(undefined);
  const [vegetableDate, setVegetableDate] = useState<Date | undefined>(undefined);
  
  const { toast } = useToast();
  
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (value: string | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted",
      description: "Your food donation has been submitted successfully!",
    });
  };
  
  const handleClothesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted",
      description: "Your clothes donation has been submitted successfully!",
    });
  };
  
  const handleVegetableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted",
      description: "Your vegetable waste donation has been submitted successfully!",
    });
  };
  
  return (
    <MainLayout>
      <section className="py-12 bg-eco-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Donate & Make a Difference</h1>
              <p className="text-lg text-gray-600">
                Choose what you'd like to donate and help reduce waste while supporting those in need.
              </p>
            </div>
            
            <Tabs defaultValue="food" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="food">Food</TabsTrigger>
                <TabsTrigger value="clothes">Clothes</TabsTrigger>
                <TabsTrigger value="vegetable">Vegetable Waste</TabsTrigger>
              </TabsList>
              
              {/* Food Donation Form */}
              <TabsContent value="food">
                <Card>
                  <CardHeader>
                    <CardTitle>Donate Food</CardTitle>
                    <CardDescription>
                      Share your excess food with those who need it instead of throwing it away.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFoodSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="food-title">Food Title</Label>
                          <Input id="food-title" placeholder="e.g., Homemade Pasta" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="food-category">Category</Label>
                          <select 
                            id="food-category" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select a category</option>
                            <option value="cooked">Cooked Food</option>
                            <option value="raw">Raw Ingredients</option>
                            <option value="packaged">Packaged Food</option>
                            <option value="bakery">Bakery Items</option>
                            <option value="fruits">Fruits & Vegetables</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="food-quantity">Quantity</Label>
                          <Input id="food-quantity" placeholder="e.g., 2 boxes, 5 servings" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Expiry Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !foodDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {foodDate ? format(foodDate, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={foodDate}
                                onSelect={setFoodDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="food-address">Pickup Address</Label>
                          <div className="flex">
                            <Input id="food-address" placeholder="Your full address" required className="rounded-r-none" />
                            <Button type="button" variant="outline" className="rounded-l-none" disabled>
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="food-description">Description</Label>
                          <Textarea
                            id="food-description"
                            placeholder="Provide details about the food, how it was stored, any dietary information, etc."
                            rows={4}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="food-image">Upload Image</Label>
                          <div className="flex items-center gap-4">
                            <label
                              htmlFor="food-image-upload"
                              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                            >
                              {foodImage ? (
                                <img src={foodImage} alt="Food preview" className="h-full w-full object-contain" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <Upload className="h-8 w-8 mb-2" />
                                  <span className="text-sm">Click to upload an image</span>
                                </div>
                              )}
                              <Input
                                id="food-image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileChange(e, setFoodImage)}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-secondary">
                        Submit Food Donation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Clothes Donation Form */}
              <TabsContent value="clothes">
                <Card>
                  <CardHeader>
                    <CardTitle>Donate Clothes</CardTitle>
                    <CardDescription>
                      Give your old clothes a new life by donating them to people in need.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleClothesSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="clothes-type">Clothes Type</Label>
                          <select 
                            id="clothes-type" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select type</option>
                            <option value="men">Men's Clothing</option>
                            <option value="women">Women's Clothing</option>
                            <option value="children">Children's Clothing</option>
                            <option value="baby">Baby Clothes</option>
                            <option value="accessories">Accessories</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="clothes-quantity">Quantity</Label>
                          <Input id="clothes-quantity" placeholder="e.g., 5 shirts, 3 pants" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="clothes-condition">Condition</Label>
                          <select 
                            id="clothes-condition" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select condition</option>
                            <option value="new">New with tags</option>
                            <option value="like-new">Like new</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !clothesDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {clothesDate ? format(clothesDate, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={clothesDate}
                                onSelect={setClothesDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="clothes-address">Pickup Address</Label>
                          <div className="flex">
                            <Input id="clothes-address" placeholder="Your full address" required className="rounded-r-none" />
                            <Button type="button" variant="outline" className="rounded-l-none" disabled>
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="clothes-description">Description</Label>
                          <Textarea
                            id="clothes-description"
                            placeholder="Provide details about the clothes, sizes, brands, etc."
                            rows={4}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="clothes-image">Upload Image</Label>
                          <div className="flex items-center gap-4">
                            <label
                              htmlFor="clothes-image-upload"
                              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                            >
                              {clothesImage ? (
                                <img src={clothesImage} alt="Clothes preview" className="h-full w-full object-contain" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <Upload className="h-8 w-8 mb-2" />
                                  <span className="text-sm">Click to upload an image</span>
                                </div>
                              )}
                              <Input
                                id="clothes-image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileChange(e, setClothesImage)}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-secondary">
                        Submit Clothes Donation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Vegetable Waste Donation Form */}
              <TabsContent value="vegetable">
                <Card>
                  <CardHeader>
                    <CardTitle>Donate Vegetable Waste</CardTitle>
                    <CardDescription>
                      Your vegetable waste can be used for composting or animal feed. Connect with local farms and goshalas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleVegetableSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="vegetable-type">Waste Type</Label>
                          <select 
                            id="vegetable-type" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select type</option>
                            <option value="kitchen">Kitchen Scraps</option>
                            <option value="garden">Garden Waste</option>
                            <option value="fruits">Fruit Peels</option>
                            <option value="vegetables">Vegetable Trimmings</option>
                            <option value="mixed">Mixed Organic Waste</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="vegetable-quantity">Quantity (in KG)</Label>
                          <Input id="vegetable-quantity" type="number" min="0.1" step="0.1" placeholder="e.g., 5" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="vegetable-frequency">Frequency</Label>
                          <select 
                            id="vegetable-frequency" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select frequency</option>
                            <option value="one-time">One-time</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !vegetableDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {vegetableDate ? format(vegetableDate, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={vegetableDate}
                                onSelect={setVegetableDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="vegetable-address">Pickup Address</Label>
                          <div className="flex">
                            <Input id="vegetable-address" placeholder="Your full address" required className="rounded-r-none" />
                            <Button type="button" variant="outline" className="rounded-l-none" disabled>
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="vegetable-description">Description</Label>
                          <Textarea
                            id="vegetable-description"
                            placeholder="Provide details about the vegetable waste, how it's stored, etc."
                            rows={4}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="vegetable-image">Upload Image (Optional)</Label>
                          <div className="flex items-center gap-4">
                            <label
                              htmlFor="vegetable-image-upload"
                              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                            >
                              {vegetableImage ? (
                                <img src={vegetableImage} alt="Vegetable waste preview" className="h-full w-full object-contain" />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <Upload className="h-8 w-8 mb-2" />
                                  <span className="text-sm">Click to upload an image</span>
                                </div>
                              )}
                              <Input
                                id="vegetable-image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileChange(e, setVegetableImage)}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-secondary">
                        Submit Vegetable Waste Donation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Donate;
