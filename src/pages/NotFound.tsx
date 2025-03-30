
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-softWhite px-6 py-24">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl md:text-8xl font-bold text-deepNavy mb-6">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary text-lg py-3 px-8">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
