import React from 'react';

// Components
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Default: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="uk-offcanvas-content">
      <div uk-height-viewport="expand: true">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
};

export default Default;
