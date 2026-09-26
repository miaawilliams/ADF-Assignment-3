import './App.css';
import PostCard from './components/ProductionCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footet from './components/Footer';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>      
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your one-stop shop for all your component needs."
        callToAction="Shop Now"
        image="https://placehold.co/1200x400"
      />
        <h1 className='products-title'>Popular Products</h1>

        <PostCard 
          name="Gaming Controller"
          price="$40"
          image="https://placehold.co/600x400"
          description="Use with your favorite gaming console to provide an easy and smooth gaming experience."
        />

        <PostCard 
          name="Portable Printer"
          price="$60"
          image="https://placehold.co/600x400"
          description="Take printing with you anywhere in this simple to use, portable printer."
        />

        <PostCard
          name= "Wireless Mouse"
          price="$35"
          image="https://placehold.co/600x400"
          description="A wireless mouse that is compatible with all devices and provides a smooth experience."
        />

        <Footer
          email='Componentscorner@gmail.com'
          phoneNumber='111-222-3333'
          address='100 Corner Dr.'
        />
      </main>
    </div>
  );
}



export default App;