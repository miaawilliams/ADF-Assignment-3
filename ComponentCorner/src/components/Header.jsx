import './Header.css';

function Header({ cartCount = 0 }) {
    return (
        <header className='app-header'>
            <h1 className='logo'>ComponentCorner</h1>

            <nav className='nav-menu'>
                <a href='#' className='nav-link'>Home</a>
                <a href='#' className='nav-link'>Products</a>
                <a href='#' className='nav-link'>About</a>
                <a href='#' className='nav-link'>Contact Us</a>
            </nav>

            <div className='cart-container' aria-label={`Cart with ${cartCount} items`}>
                <span className='cart-icon' aria-hidden='true'>🛒</span>
                {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
            </div>
        </header>
    );
}

export default Header;