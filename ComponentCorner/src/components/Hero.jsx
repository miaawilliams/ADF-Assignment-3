import './Hero.css';

function Hero({ title, subtitle, callToAction, image }) {
    return (
        <div className='hero'>
            <h1 className='hero-title'>{title}</h1>
            <img
                src={image}
                alt="hero image"
                className='hero-image'
            />
            <p className='hero-subtitle'>
                {subtitle}
            </p>
            <button className='hero-btn'>
                {callToAction}
            </button>
        </div>
    );
}

export default Hero;