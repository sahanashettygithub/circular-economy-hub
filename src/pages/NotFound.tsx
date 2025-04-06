
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-eco-light px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-eco-primary flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-eco-primary hover:bg-eco-secondary" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
