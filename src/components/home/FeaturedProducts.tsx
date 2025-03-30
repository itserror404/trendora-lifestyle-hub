
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

// Mock product data
const products = [
  {
    id: 1,
    name: "Modern Minimalist Watch",
    category: "Fashion",
    price: 129.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999",
    hoverImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1964",
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 249.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    hoverImage: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Scandinavian Ceramic Vase",
    category: "Home Decor",
    price: 79.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612196808214-b7e139549e09?auto=format&fit=crop&q=80&w=1000",
    hoverImage: "https://images.unsplash.com/photo-1603204077167-2fa0397f591b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    name: "Premium Leather Wallet",
    category: "Fashion",
    price: 89.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    hoverImage: "https://images.unsplash.com/photo-1627123367874-e34225e62b41?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    category: "Electronics",
    price: 199.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000",
    hoverImage: "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    name: "Minimalist Table Lamp",
    category: "Home Decor",
    price: 149.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
    hoverImage: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000",
  },
];

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [sortBy, setSortBy] = useState<string>("newest");
  const navigate = useNavigate();

  const filters = ["All", "Fashion", "Electronics", "Home Decor"];

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...products];

    if (activeFilter !== "All") {
      filteredProducts = filteredProducts.filter((product) => product.category === activeFilter);
    }

    switch (sortBy) {
      case "priceLow":
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        break;
      case "bestSelling":
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
        break;
    }

    setDisplayedProducts(filteredProducts);
  }, [activeFilter, sortBy]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Handle adding to cart
  const handleAddToCart = (productId: number) => {
    // In a real app, this would add the product to the cart
    console.log(`Added product ${productId} to cart`);
    toast({
      title: "Product added to cart",
      description: "The item has been added to your shopping cart.",
    });
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-softWhite">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that combine style, functionality, and quality craftsmanship.
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 scroll-reveal">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-pill ${activeFilter === filter ? 'bg-pastelBlue font-medium' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center scroll-reveal">
            <label className="mr-2 text-gray-700">Sort By: </label>
            <div className="relative">
              <select 
                onChange={(e) => setSortBy(e.target.value)} 
                value={sortBy}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-pastelBlue"
              >
                <option value="newest">Newest</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="bestSelling">Best Selling</option>
              </select>
              <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none rotate-90" size={16} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card scroll-reveal"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <Link to={`/shop/product/${product.id}`}>
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={hoveredProductId === product.id ? product.hoverImage : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover product-image-hover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-deepNavy text-white text-xs px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/shop/product/${product.id}`}>
                    <h3 className="font-poppins font-semibold text-lg mb-2 hover:text-vibrantCoral transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "text-deepNavy fill-deepNavy" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-poppins font-bold text-lg">${product.price}</span>
                    <button 
                      className="btn-primary px-3 py-1 text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found matching your criteria.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center scroll-reveal">
          <Link to="/shop" className="btn-secondary inline-flex items-center gap-2">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
