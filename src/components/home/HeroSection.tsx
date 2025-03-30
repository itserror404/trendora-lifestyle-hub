
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2070')",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex items-center px-6 md:px-12">
        <div className="max-w-2xl text-white" style={parallaxStyle}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Discover Lifestyle Excellence with Trendora
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Curated premium products that elevate your lifestyle. Explore our collection of fashion, electronics, and home decor.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/shop"
              className="btn-primary inline-flex items-center gap-2 text-lg py-3 px-8 hover:translate-x-1 transition-transform"
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
