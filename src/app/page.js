import Navbar from './components/new/Navbar';
import Hero from './components/new/Hero';
import Services from './components/new/Services';
import About from './components/new/About';
import Brands from './components/new/Brands';
import Products from './components/new/Products';
import Contact from './components/new/Contact';
import Footer from './components/new/Footer';
import ScrollToTop from './components/new/ScrollToTop';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Brands />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
