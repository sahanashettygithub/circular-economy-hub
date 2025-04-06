
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-eco-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">W2W</span>
              </div>
              <span className="font-bold text-lg text-eco-primary">Waste to Worth</span>
            </div>
            <p className="text-gray-600">
              Transforming waste into valuable resources through sustainable practices and community connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-eco-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-eco-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-eco-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-eco-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-eco-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 hover:text-eco-primary transition-colors">Donate</Link>
              </li>
              <li>
                <Link to="/receive" className="text-gray-600 hover:text-eco-primary transition-colors">Receive</Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-600 hover:text-eco-primary transition-colors">Sell</Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-600 hover:text-eco-primary transition-colors">Buy</Link>
              </li>
              <li>
                <Link to="/eco-store" className="text-gray-600 hover:text-eco-primary transition-colors">Eco Store</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-eco-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-eco-primary transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-eco-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-eco-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-eco-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-eco-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-eco-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-eco-primary transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Waste to Worth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
