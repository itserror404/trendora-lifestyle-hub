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
  const [sortBy, setSortBy] = useState<string>("newest");
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const filters = ["All", "Fashion", "Electronics", "Home Decor"];

  // Update active filter when URL parameter changes
  useEffect(() => {
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
  }, [category]);

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...products];

    if (activeFilter !== "All") {
      filteredProducts = filteredProducts.filter((product) => product.category === activeFilter);
    }

    switch (sortBy) {
      case "priceLow":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "bestSelling":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setDisplayedProducts(filteredProducts);
  }, [activeFilter, sortBy]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    navigate(filter === "All" ? "/shop" : `/shop/${filter}`);
  };

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Product added to cart",
      description: "The item has been added to your shopping cart.",
    });
  };

  return (
    <Layout>
      <div className="bg-softWhite py-28 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Browse our collection of premium lifestyle products
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
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

          {/* Sorting */}
          <div className="mb-12">
            <label className="mr-2">Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="bestSelling">Best Selling</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <Link to={`/shop/product/${product.id}`}>
                  <img
                    src={hoveredProductId === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-lg mt-4">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </Link>
                <button
                  className="btn-primary mt-2"
                  onClick={(e) => handleAddToCart(product.id, e)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {displayedProducts.length === 0 && (
            <p className="text-center text-gray-600 mt-12">No products found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
