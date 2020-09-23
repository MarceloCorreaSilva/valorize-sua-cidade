import React from 'react';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
      }}
    >
      <span
        uk-spinner="ratio: 4.5"
        style={{
          display: 'flex',
        }}
      ></span>
    </div>
  );
};

export default Loader;
