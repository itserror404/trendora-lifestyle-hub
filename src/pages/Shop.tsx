import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const products = [
  { id: 1, name: "Modern Minimalist Watch", category: "Fashion", price: 129.99, rating: 4.8 },
  { id: 2, name: "Wireless Headphones", category: "Electronics", price: 249.99, rating: 4.9 },
  { id: 3, name: "Ceramic Vase", category: "Home Decor", price: 79.99, rating: 4.7 },
  { id: 4, name: "Leather Wallet", category: "Fashion", price: 89.99, rating: 4.6 },
  { id: 5, name: "Smart Speaker", category: "Electronics", price: 199.99, rating: 4.8 },
  { id: 6, name: "Table Lamp", category: "Home Decor", price: 149.99, rating: 4.5 },
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
    let filteredProducts = products;

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
    navigate(filter === "All" ? "/shop" : `/shop/${filter}`);
  };

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8">Shop Our Products</h1>
        
        {/* Filters */}
        <div className="mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`mr-4 ${activeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Sorting */}
        <div className="mb-8">
          <label>Sort By: </label>
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="newest">Newest</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="bestSelling">Best Selling</option>
          </select>
        </div>

        {/* Product Display */}
        {displayedProducts.length > 0 ? (
          <ul>
            {displayedProducts.map((product) => (
              <li key={product.id} className="mb-6">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}⭐</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
