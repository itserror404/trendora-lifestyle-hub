
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

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

  const filters = ["All", "Fashion", "Electronics", "Home Decor"];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(product => product.category === activeFilter);

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

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill ${activeFilter === filter ? 'bg-pastelBlue font-medium' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

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
