
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-softWhite py-28 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h1 className="text-4xl md:text-5xl font-bold text-deepNavy mb-6">About Trendora</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our story of crafting exceptional lifestyle experiences through curated products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 scroll-reveal">
              <div>
                <h2 className="text-3xl font-bold text-deepNavy mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2018, Trendora began with a simple mission: to bring together the finest lifestyle products from around the world, making premium quality accessible to discerning customers.
                </p>
                <p className="text-gray-600">
                  What started as a small boutique in San Francisco has evolved into a global brand, known for our meticulous attention to detail and commitment to excellence in every product we offer.
                </p>
              </div>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
                  alt="Trendora Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-20 text-center scroll-reveal">
              <h2 className="text-3xl font-bold text-deepNavy mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-pastelBlue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deepNavy">
                      <path d="M5 3a2 2 0 0 0-2 2"></path>
                      <path d="M19 3a2 2 0 0 1 2 2"></path>
                      <path d="M21 19a2 2 0 0 1-2 2"></path>
                      <path d="M5 21a2 2 0 0 1-2-2"></path>
                      <path d="M9 3h1"></path>
                      <path d="M9 21h1"></path>
                      <path d="M14 3h1"></path>
                      <path d="M14 21h1"></path>
                      <path d="M3 9v1"></path>
                      <path d="M21 9v1"></path>
                      <path d="M3 14v1"></path>
                      <path d="M21 14v1"></path>
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We select only the finest materials and craftsmanship for our products, ensuring lasting value.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-pastelBlue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deepNavy">
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <path d="M8 7v10"></path>
                      <path d="M16 7v10"></path>
                      <path d="M7 12h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy mb-2">Design</h3>
                  <p className="text-gray-600">
                    We believe in the power of thoughtful design to enhance everyday experiences.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-pastelBlue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deepNavy">
                      <path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"></path>
                      <path d="M15 9.4a4 4 0 1 0 0 1.2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We are committed to ethical sourcing and reducing our environmental footprint.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold text-deepNavy mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy">Sarah Johnson</h3>
                  <p className="text-gray-600 mb-2">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                      alt="David Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy">David Chen</h3>
                  <p className="text-gray-600 mb-2">Creative Director</p>
                </div>
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
                      alt="Maya Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-deepNavy">Maya Patel</h3>
                  <p className="text-gray-600 mb-2">Head of Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
