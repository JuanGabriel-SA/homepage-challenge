import { useState } from 'react'
import './App.scss'
import { motion } from 'framer-motion';
import Navbar from './patterns/Navbar';
function App() {
  const [slideId, setslideId] = useState(1);
  return (
    <main className='home'>
      <Navbar />
      <section className='slide-section'>
        <div className={`slide-section__image image-${slideId}`}>
          <div className="change-buttons--sm">
            <span className='change-buttons__arrow-left' onClick={e => slideId > 1 && setslideId(prev => prev - 1)}>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M13 0L1 12l12 12' stroke='#FFF' fill='none' fillRule='evenodd' /></svg>
            </span>
            <span className='change-buttons__arrow-right' onClick={e => slideId < 3 && setslideId(prev => prev + 1)}>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M1 0l12 12L1 24' stroke='#FFF' fill='none' fillRule='evenodd' /></svg>
            </span>
          </div>
        </div>
        <div className='slide-section__description'>
          <div className="slide-section__content">
            <h1 className='slide-section__title'>
              Discover innovative ways to decorate
            </h1>
            <p className='default__p'>
              We provide unmatched quality, comfort, and style for property owners across the country.
              Our experts combine form and function in bringing your vision to life. Create a room in your
              own style with our collection and make your property a reflection of you and what you love.
            </p>
            <div className='slide-section__shop-button'>
              <h1 className='slide-section__shop-title'>
                SHOP NOW
              </h1>
              <span className='slide-section__shop-svg'>
                <svg width='40' height='12' xmlns='http://www.w3.org/2000/svg'><path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' fill='#000' fillRule='nonzero' /></svg>
              </span>
            </div>
          </div>
          <div className="change-buttons--lg">
            <span className='change-buttons__arrow-left' onClick={e => slideId > 1 && setslideId(prev => prev - 1)}>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M13 0L1 12l12 12' stroke='#FFF' fill='none' fillRule='evenodd' /></svg>
            </span>
            <span className='change-buttons__arrow-right' onClick={e => slideId < 3 && setslideId(prev => prev + 1)}>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M1 0l12 12L1 24' stroke='#FFF' fill='none' fillRule='evenodd' /></svg>
            </span>
          </div>
        </div>
      </section>
      <section className='about-section'>
        <img className='about-section__image' src='/image-about-dark.jpg' />
        <div className="about-section__content">
          <h1 className='about-section__title'>
            ABOUT OUR FURNITURE
          </h1>
          <p className='default__p'>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img className='about-section__image h-[240px]' src='/image-about-light.jpg' />
      </section>
    </main>
  )
}

export default App
