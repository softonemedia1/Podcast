import React from 'react';
import Header from './header';
import Footer from './footer';
import SingleBanner from '@/components/common/heroSection';
import LiquidEther from '../common/background';

const Page = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Full-page LiquidEther background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Page content overlay */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />

        <SingleBanner
          bannerLink="/services"
          mobileImageSrc="/11.jpeg"
          tabletImageSrc="/22.jpeg"
          desktopImageSrc="/33.jpeg"
          altText="Development & Podcast Banner"
        />

        {/* Example: you can add more content here */}
        {/* <HeroSection /> */}
        {/* <Data /> */}

        <Footer />
      </div>
    </div>
  );
};

export default Page;
