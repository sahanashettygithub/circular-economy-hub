
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Info, MapPin, Upload } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Sell = () => {
  const [clothesImages, setClothesImages] = useState<string[]>([]);
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages: string[] = [];
      
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === files.length) {
              setClothesImages((prev) => [...prev, ...newImages]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
  
  const removeImage = (index: number) => {
    setClothesImages((prev) => prev.filter((_, i) => i !== index));
  };
  
  const handleClothesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sale Request Submitted",
      description: "Your clothes sale request has been submitted successfully!",
    });
  };
  
  return (
    <MainLayout>
      <section className="py-12 bg-eco-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Sell Old Clothes</h1>
              <p className="text-lg text-gray-600">
                Sell your old clothes to recycling factories and earn eco points.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Sell Clothes</CardTitle>
                <CardDescription>
                  Fill out the form below to sell your old clothes to recycling factories. You'll receive 10 eco points for every 1 KG of clothes sold.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleClothesSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="clothes-weight">
                        Weight (KG)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 inline-block ml-1 cursor-help text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-60">You'll receive 10 eco points for every 1 KG of clothes sold.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input id="clothes-weight" type="number" min="0.1" step="0.1" placeholder="e.g., 5" required />
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
                        <option value="poor">Poor (still recyclable)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="clothes-type">Clothes Type</Label>
                      <select 
                        id="clothes-type" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      >
                        <option value="">Select primary material</option>
                        <option value="cotton">Cotton</option>
                        <option value="polyester">Polyester</option>
                        <option value="wool">Wool</option>
                        <option value="denim">Denim</option>
                        <option value="mixed">Mixed Materials</option>
                        <option value="other">Other</option>
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
                              !pickupDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {pickupDate ? format(pickupDate, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={setPickupDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="pickup-address">Pickup Address</Label>
                      <div className="flex">
                        <Input id="pickup-address" placeholder="Your full address" required className="rounded-r-none" />
                        <Button type="button" variant="outline" className="rounded-l-none" disabled>
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="clothes-description">Description</Label>
                      <Textarea
                        id="clothes-description"
                        placeholder="Provide details about the clothes you're selling"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>Upload Images</Label>
                      <div className="border rounded-md p-4">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {clothesImages.map((image, index) => (
                            <div key={index} className="relative">
                              <img src={image} alt={`Clothes ${index + 1}`} className="h-32 w-full object-cover rounded-md" />
                              <button
                                type="button"
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                onClick={() => removeImage(index)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <label
                          htmlFor="clothes-images-upload"
                          className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center text-gray-500">
                            <Upload className="h-8 w-8 mb-2" />
                            <span className="text-sm">Click to upload images</span>
                            <span className="text-xs text-gray-400 mt-1">Upload multiple images at once</span>
                          </div>
                          <Input
                            id="clothes-images-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-md p-4 mb-6">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Eco Points</h4>
                        <p className="text-blue-700 text-sm">
                          You'll receive 10 eco points for every 1 KG of clothes sold. These points can be redeemed for discounts on products in our eco store.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-secondary">
                    Submit Clothes for Sale
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Sell;
