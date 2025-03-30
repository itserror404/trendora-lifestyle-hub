
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Star, ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag, Heart, Share2 } from "lucide-react";

// Reusing the product data from FeaturedProducts
const products = [
  {
    id: 1,
    name: "Modern Minimalist Watch",
    category: "Fashion",
    price: 129.99,
    rating: 4.8,
    description: "This elegant minimalist watch combines style and functionality with its clean design and premium materials. Perfect for everyday wear or special occasions.",
    features: [
      "Swiss movement for precise timekeeping",
      "Scratch-resistant sapphire crystal",
      "Water-resistant up to 50 meters",
      "Genuine leather strap with stainless steel buckle",
      "1-year manufacturer warranty"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1964",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1964",
    ],
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 249.99,
    rating: 4.9,
    description: "Experience immersive audio with these premium wireless headphones featuring active noise cancellation, high-fidelity sound, and all-day comfort.",
    features: [
      "Active noise cancellation eliminates ambient noise",
      "40mm dynamic drivers for rich, detailed sound",
      "Up to 30 hours of battery life",
      "Quick charge: 5 hours of playback from 10 minutes of charging",
      "Plush memory foam ear cushions for extended comfort"
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000",
    ],
    stock: 8,
  },
  {
    id: 3,
    name: "Scandinavian Ceramic Vase",
    category: "Home Decor",
    price: 79.99,
    rating: 4.7,
    description: "Add a touch of Scandinavian elegance to your home with this handcrafted ceramic vase. Its minimalist design complements any interior style.",
    features: [
      "Handcrafted from high-quality ceramic",
      "Matte finish with subtle texture",
      "Versatile size suitable for various floral arrangements",
      "Water-resistant interior",
      "Each piece is unique with slight variations in glaze"
    ],
    images: [
      "https://images.unsplash.com/photo-1612196808214-b7e139549e09?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1603204077167-2fa0397f591b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=80&w=1000",
    ],
    stock: 12,
  },
  {
    id: 4,
    name: "Premium Leather Wallet",
    category: "Fashion",
    price: 89.99,
    rating: 4.6,
    description: "Crafted from full-grain leather, this slim wallet offers ample storage for cards and cash while maintaining a sleek profile. The perfect blend of style and functionality.",
    features: [
      "Made from 100% full-grain leather",
      "Ages beautifully with a rich patina over time",
      "6 card slots, 2 hidden pockets, and 1 bill compartment",
      "RFID blocking technology for security",
      "Hand-stitched edges for durability"
    ],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1627123367874-e34225e62b41?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1541279006548-e5f6e4f68043?auto=format&fit=crop&q=80&w=1000",
    ],
    stock: 20,
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    category: "Electronics",
    price: 199.99,
    rating: 4.8,
    description: "Transform your home with this intelligent speaker that delivers premium sound quality and seamlessly integrates with your smart home ecosystem.",
    features: [
      "360° omnidirectional sound with powerful bass",
      "Voice assistant compatibility with multiple platforms",
      "Multi-room audio synchronization",
      "Adaptive EQ automatically tunes music to room acoustics",
      "Simple setup with wireless connectivity"
    ],
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=1000",
    ],
    stock: 5,
  },
  {
    id: 6,
    name: "Minimalist Table Lamp",
    category: "Home Decor",
    price: 149.99,
    rating: 4.5,
    description: "This sleek table lamp combines minimalist design with functional lighting, featuring adjustable brightness and a warm glow perfect for any room.",
    features: [
      "Dimmable LED with 3 color temperature settings",
      "Touch-sensitive controls for easy operation",
      "Energy-efficient design with low power consumption",
      "Adjustable arm for directional lighting",
      "Built-in USB charging port"
    ],
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
    ],
    stock: 10,
  },
];

// Related products - similar category products excluding the current one
const getRelatedProducts = (currentId: number, category: string) => {
  return products.filter(product => product.id !== currentId && product.category === category).slice(0, 4);
};

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id || "1");
  const product = products.find(p => p.id === productId) || products[0];
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  
  const relatedProducts = getRelatedProducts(product.id, product.category);

  const handlePrevImage = () => {
    setActiveImageIndex(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    console.log(`Added ${quantity} of product ${product.id} to cart`);
    alert(`${quantity} ${product.name} added to cart!`);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Layout>
      <div className="bg-softWhite py-28 px-6 md:px-12">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <Link to="/" className="text-gray-500 hover:text-deepNavy">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/shop" className="text-gray-500 hover:text-deepNavy">Shop</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to={`/shop/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-deepNavy">{product.category}</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-deepNavy font-medium">{product.name}</span>
            </nav>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Product Images */}
            <div className="scroll-reveal">
              <div className="relative bg-white rounded-lg overflow-hidden aspect-square mb-4">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                
                <button 
                  onClick={handlePrevImage} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-deepNavy hover:bg-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button 
                  onClick={handleNextImage} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-deepNavy hover:bg-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden ${index === activeImageIndex ? 'ring-2 ring-deepNavy' : 'opacity-70'}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="scroll-reveal">
              <span className="inline-block bg-pastelBlue text-deepNavy px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-deepNavy mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "text-deepNavy fill-deepNavy" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} (120 reviews)</span>
              </div>
              
              <div className="text-2xl font-bold text-deepNavy mb-6">${product.price}</div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-deepNavy mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-vibrantCoral mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="font-medium text-deepNavy mr-4">Quantity</div>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={decreaseQuantity} 
                      className="px-3 py-2 text-gray-600 hover:text-deepNavy"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 text-center w-12">{quantity}</span>
                    <button 
                      onClick={increaseQuantity} 
                      className="px-3 py-2 text-gray-600 hover:text-deepNavy"
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="ml-4 text-sm text-gray-500">
                    {product.stock} units available
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 py-3 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button className="btn-secondary flex-1 py-3 flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Add to Wishlist
                </button>
              </div>
              
              <div className="flex items-center">
                <button className="text-gray-600 hover:text-deepNavy flex items-center gap-2">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-deepNavy mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <div 
                  key={related.id} 
                  className="product-card scroll-reveal"
                  onMouseEnter={() => setHoveredProductId(related.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <Link to={`/shop/product/${related.id}`}>
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={related.images[0]}
                        alt={related.name}
                        className="w-full h-full object-cover product-image-hover"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/shop/product/${related.id}`}>
                      <h3 className="font-poppins font-semibold text-lg mb-2 hover:text-vibrantCoral transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(related.rating) ? "text-deepNavy fill-deepNavy" : "text-gray-300"}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{related.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-poppins font-bold text-lg">${related.price}</span>
                      <button 
                        className="btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Added product ${related.id} to cart`);
                          alert(`Product added to cart!`);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
