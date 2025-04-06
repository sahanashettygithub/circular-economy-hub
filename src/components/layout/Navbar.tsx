
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-eco-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">W2W</span>
          </div>
          <span className="font-bold text-lg text-eco-primary hidden sm:inline-block">Waste to Worth</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/donate" className="font-medium text-gray-600 hover:text-eco-primary transition-colors">
            Donate
          </Link>
          <Link to="/receive" className="font-medium text-gray-600 hover:text-eco-primary transition-colors">
            Receive
          </Link>
          <Link to="/sell" className="font-medium text-gray-600 hover:text-eco-primary transition-colors">
            Sell
          </Link>
          <Link to="/buy" className="font-medium text-gray-600 hover:text-eco-primary transition-colors">
            Buy
          </Link>
          <Link to="/eco-store" className="font-medium text-gray-600 hover:text-eco-primary transition-colors">
            Eco Store
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button variant="default" size="sm" className="gap-1 bg-eco-primary hover:bg-eco-secondary" asChild>
            <Link to="/register">
              <User className="h-4 w-4" />
              Register
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-eco-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/donate" 
              className="font-medium text-gray-600 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link 
              to="/receive" 
              className="font-medium text-gray-600 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Receive
            </Link>
            <Link 
              to="/sell" 
              className="font-medium text-gray-600 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell
            </Link>
            <Link 
              to="/buy" 
              className="font-medium text-gray-600 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy
            </Link>
            <Link 
              to="/eco-store" 
              className="font-medium text-gray-600 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Eco Store
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" size="sm" className="w-full justify-center" asChild>
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
              <Button variant="default" size="sm" className="w-full justify-center bg-eco-primary hover:bg-eco-secondary" asChild>
                <Link to="/register">
                  <User className="h-4 w-4 mr-2" />
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
