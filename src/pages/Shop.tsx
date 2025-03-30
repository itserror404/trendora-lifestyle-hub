import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Product Data
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
];

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");
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

  // Apply filters and sorting
  useEffect(() => {
    console.log(`Filtering: ${activeFilter}, Sorting: ${sortBy}`);

    let filtered = [...products];

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter((product) => product.category === activeFilter);
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
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse our collection of premium lifestyle products</p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`filter-pill ${activeFilter === filter ? "bg-pastelBlue font-medium" : ""}`}
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
            {displayedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/shop/product/${product.id}`}>
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full" />
                  </div>
                  <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                  <p>${product.price}</p>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayedProducts.length === 0 && (
            <p className="text-center py-12">No products found matching your criteria.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
