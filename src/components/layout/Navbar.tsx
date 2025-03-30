
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "py-2 bg-white shadow-md" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-deepNavy font-poppins">TRENDORA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("nav-link", isActive("/") && "active")}>
            Home
          </Link>
          <Link to="/shop" className={cn("nav-link", isActive("/shop") && "active")}>
            Shop
          </Link>
          <Link to="/about" className={cn("nav-link", isActive("/about") && "active")}>
            About
          </Link>
          <Link to="/contact" className={cn("nav-link", isActive("/contact") && "active")}>
            Contact
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-deepNavy hover:text-vibrantCoral transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="text-deepNavy hover:text-vibrantCoral transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-vibrantCoral text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-deepNavy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-full md:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-deepNavy">TRENDORA</span>
              <button className="text-deepNavy" onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link to="/" className="nav-link text-lg" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/shop" className="nav-link text-lg" onClick={toggleMenu}>
                Shop
              </Link>
              <Link to="/about" className="nav-link text-lg" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="nav-link text-lg" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>

            <div className="mt-8 flex items-center space-x-6">
              <button className="text-deepNavy hover:text-vibrantCoral transition-colors">
                <Search size={20} />
              </button>
              <Link to="/cart" className="text-deepNavy hover:text-vibrantCoral transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-vibrantCoral text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
