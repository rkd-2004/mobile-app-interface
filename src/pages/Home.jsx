import Header from '../components/Header';
import Card from '../components/Card';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="page home-page">
      <Header title="Home" />
      
      <main className="content">
        <h2>Featured Items</h2>
        <div className="cards-container">
          <Card 
            title="Product 1"
            price="$19.99"
            image="/assets/product1.jpg"
          />
          <Card 
            title="Product 2"
            price="$24.99"
            image="/assets/product2.jpg"
          />
          {/* More cards as per design */}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Home;