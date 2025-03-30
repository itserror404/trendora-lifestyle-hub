
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize scroll reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const revealPoint = 150;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
