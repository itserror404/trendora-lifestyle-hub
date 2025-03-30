
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to save the email
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset the submitted state after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-deepNavy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-vibrantCoral rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pastelBlue rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-reveal">Join Our Newsletter</h2>
          <p className="text-white/80 text-lg mb-8 scroll-reveal">
            Be the first to know about new arrivals, special offers, and lifestyle inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto scroll-reveal">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow py-3 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-vibrantCoral"
              required
            />
            <button
              type="submit"
              className="bg-vibrantCoral text-white py-3 px-8 rounded-full hover:bg-opacity-90 transition-all font-montserrat font-medium"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-6 text-white/90 animate-fade-in">
              Thank you for subscribing! You'll receive our newsletter soon.
            </div>
          )}
          
          <p className="text-white/60 text-sm mt-6 scroll-reveal">
            By subscribing, you agree to receive marketing emails from Trendora. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
