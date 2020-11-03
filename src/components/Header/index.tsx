import React from 'react';

// Configs
import config from '../../config';

function Header() {
  return (
    <section className="uk-section uk-section-small uk-section-primary" style={{ background: '#305183' }}>
      <div className="uk-container">
        <h2 className="uk-margin-remove uk-text-bold">
          {config.city.name}
        </h2>
      </div>
    </section>
  );
}

export default Header;
