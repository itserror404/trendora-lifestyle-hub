
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coolGray py-16 border-t border-coolGray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <h4 className="text-2xl font-bold text-deepNavy mb-4">TRENDORA</h4>
            <p className="text-gray-600 mb-6 pr-8">
              Discover lifestyle excellence with our curated collection of premium fashion, electronics, and home decor.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deepNavy rounded-full flex items-center justify-center text-white hover:bg-vibrantCoral transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deepNavy rounded-full flex items-center justify-center text-white hover:bg-vibrantCoral transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deepNavy rounded-full flex items-center justify-center text-white hover:bg-vibrantCoral transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h5 className="text-deepNavy font-bold text-lg mb-4">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/fashion" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/shop/electronics" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop/home-decor" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/shop/new-arrivals" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="text-deepNavy font-bold text-lg mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h5 className="text-deepNavy font-bold text-lg mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-vibrantCoral transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h5 className="text-deepNavy font-bold text-lg mb-4">Newsletter</h5>
            <p className="text-gray-600 mb-4">Subscribe to receive updates on new arrivals and special promotions</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="input-field py-3" />
              <button type="submit" className="btn-primary py-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2023 Trendora. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-vibrantCoral transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-vibrantCoral transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-500 text-sm hover:text-vibrantCoral transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
