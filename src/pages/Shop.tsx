
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Reusing the product data from FeaturedProducts
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

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [displayedProducts, setDisplayedProducts] = useState(products);

  const filters = ["All", "Fashion", "Electronics", "Home Decor"];

  // Update active filter when URL parameter changes
  useEffect(() => {
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
  }, [category]);

  // Apply filters and sorting whenever these values change
  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(product => product.category === activeFilter);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "bestSelling":
        // For demo purposes, we'll just sort by rating
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // "newest" - no change to order as we assume they're already sorted by newest
        break;
    }
    
    setDisplayedProducts(filtered);
  }, [activeFilter, sortBy]);

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    navigate(filter === "All" ? "/shop" : `/shop/${filter}`);
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
    <Layout>
      <div className="bg-softWhite py-28 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection of premium lifestyle products
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
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
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-deepNavy" />
              <select 
                className="input-field py-2 pl-4 pr-8"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="bestSelling">Best Selling</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
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
                        className="btn-primary px-4 py-1.5 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product.id);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
          
          {/* No products message */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
