import Footer from "./Footer";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow ">
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
