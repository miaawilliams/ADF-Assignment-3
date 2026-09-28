import './App.css';
import PostCard from './components/ProductionCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import { useState } from 'react';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://placehold.co/600x400',
      description: 'Premium noise-cancelling headphones with 30-hour battery life'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://placehold.co/600x400',
      description: 'Fitness tracker with heart rate monitor and GPS'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://placehold.co/600x400',
      description: 'Portable waterproof speaker with 360-degree sound'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.99,
      image: 'https://placehold.co/600x400',
      description: 'Ergonomic aluminum stand for laptops and tablets'
    },
    {
      id: 5,
      name: 'Webcam',
      price: 129.99,
      image: 'https://placehold.co/600x400',
      description: '4K webcam with auto-focus and noise reduction'
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      price: 159.99,
      image: 'https://placehold.co/600x400',
      description: 'RGB backlit keyboard with custom switches'
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='app'>
      <Header cartCount={cart.length} />

      <Hero
        title='Welcome to ComponentCorner'
        subtitle='Your one-stop shop for all your component needs.'
        callToAction='Shop Now'
        image='https://placehold.co/1200x400'
      />

      <main className='main-content'>
        <h2>Top Products</h2>

        {products.map((product) => (
          <PostCard
            key={product.id}
            product={product}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}

        <section className='cart-section'>
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className='empty-cart'>Your cart is empty.</p>
          ) : (
            <>
              <div className='cart-list'>
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    name={item.name}
                    price={item.price}
                    removeFromCart={() => removeFromCart(item.id)}
                  />
                ))}
              </div>

              <p className='cart-total'>Total: ${cartTotal.toFixed(2)}</p>
            </>
          )}
        </section>

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