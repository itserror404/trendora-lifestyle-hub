
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-coolGray">
      {/* Background Elements */}
      <div 
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-pastelBlue rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateX(${scrollY * 0.05}px) translateY(${scrollY * 0.02}px)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-vibrantCoral rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateX(${-scrollY * 0.07}px) translateY(${-scrollY * 0.03}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1 scroll-reveal">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1000"
                alt="Trendora Founder"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-deepNavy italic font-medium">
                  "Our mission is to curate products that bring joy, functionality, and beauty to everyday life."
                </p>
                <p className="mt-4 text-right text-gray-600">- Sarah Johnson, Founder</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-deepNavy mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018, Trendora began with a simple vision: to create a curated marketplace where quality, design, and functionality come together seamlessly.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of passionate curators travel the globe to discover unique, premium products across fashion, electronics, and home decor that embody our commitment to excellence.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that the objects we surround ourselves with should not only be beautiful but should enhance our daily experiences. Each product in our collection is thoughtfully selected to bring joy and value to your lifestyle.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 scroll-reveal">
          <h3 className="text-2xl font-bold text-deepNavy mb-12 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pastelBlue"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* 2018 */}
              <div className="md:col-start-1 flex flex-col items-end scroll-reveal">
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-sm">
                  <h4 className="text-xl font-bold text-vibrantCoral mb-2">2018</h4>
                  <p className="text-gray-600">Trendora founded with a mission to curate premium lifestyle products.</p>
                </div>
              </div>
              <div className="md:col-start-2 md:row-start-1 hidden md:block"></div>

              {/* 2019 */}
              <div className="md:col-start-1 md:row-start-2 hidden md:block"></div>
              <div className="md:col-start-2 flex flex-col items-start scroll-reveal">
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-sm">
                  <h4 className="text-xl font-bold text-vibrantCoral mb-2">2019</h4>
                  <p className="text-gray-600">Expanded to include international brands and opened our first flagship store.</p>
                </div>
              </div>

              {/* 2021 */}
              <div className="md:col-start-1 md:row-start-3 flex flex-col items-end scroll-reveal">
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-sm">
                  <h4 className="text-xl font-bold text-vibrantCoral mb-2">2021</h4>
                  <p className="text-gray-600">Launched our mobile app and expanded to over 1,000 premium products.</p>
                </div>
              </div>
              <div className="md:col-start-2 md:row-start-3 hidden md:block"></div>

              {/* 2023 */}
              <div className="md:col-start-1 md:row-start-4 hidden md:block"></div>
              <div className="md:col-start-2 md:row-start-4 flex flex-col items-start scroll-reveal">
                <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-sm">
                  <h4 className="text-xl font-bold text-vibrantCoral mb-2">2023</h4>
                  <p className="text-gray-600">Celebrating 5 years with global shipping and a commitment to sustainable practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
