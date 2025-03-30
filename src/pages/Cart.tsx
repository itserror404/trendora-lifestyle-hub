
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard } from "lucide-react";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Modern Minimalist Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999",
    quantity: 1,
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const shipping = 15.00;
  const total = subtotal + shipping;
  
  const handleCheckout = () => {
    // In a real app, this would redirect to checkout page or process
    alert("Proceeding to checkout...");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-softWhite py-28 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-4">Your Cart</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Review your items and proceed to checkout
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 scroll-reveal">
              <div className="w-20 h-20 bg-pastelBlue rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-deepNavy" />
              </div>
              <h2 className="text-2xl font-bold text-deepNavy mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2 py-3 px-8">
                Start Shopping
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 scroll-reveal">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-deepNavy">Cart Items ({cartItems.length})</h2>
                  </div>
                  
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className="border-b border-gray-100 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-center p-6">
                          <div className="flex items-center mb-4 md:mb-0 md:w-2/3">
                            <div className="w-24 h-24 mr-6 flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                            </div>
                            <div>
                              <Link to={`/shop/product/${item.id}`} className="text-lg font-semibold text-deepNavy hover:text-vibrantCoral transition-colors">
                                {item.name}
                              </Link>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between md:w-1/3">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                className="px-3 py-1 text-gray-600 hover:text-deepNavy"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                className="px-3 py-1 text-gray-600 hover:text-deepNavy"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <span className="font-semibold text-deepNavy">${(item.price * item.quantity).toFixed(2)}</span>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-vibrantCoral transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                  <Link to="/shop" className="text-deepNavy hover:text-vibrantCoral transition-colors flex items-center gap-2">
                    <ArrowRight size={18} className="rotate-180" />
                    Continue Shopping
                  </Link>
                  
                  <button 
                    onClick={() => setCartItems([])}
                    className="text-gray-500 hover:text-vibrantCoral transition-colors flex items-center gap-2"
                  >
                    <Trash2 size={18} />
                    Clear Cart
                  </button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="scroll-reveal">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-deepNavy mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-deepNavy">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-deepNavy">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-4 flex justify-between">
                      <span className="font-semibold text-deepNavy">Total</span>
                      <span className="font-bold text-xl text-deepNavy">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    className="btn-primary w-full py-3 mb-4 flex items-center justify-center gap-2"
                  >
                    <CreditCard size={18} />
                    Proceed to Checkout
                  </button>
                  
                  <div className="text-sm text-gray-500 text-center">
                    Taxes calculated at checkout. Shipping costs are calculated based on your location.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
