import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Admin: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const body = document.body;
    body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed');
  }, []);

  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/admin" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/admin" className="brand-link">
          <span className="brand-text font-weight-light">Valorize</span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <NavItem to={'/'} label="Home" icon="fa-home" />
              <NavItem to={'/orcamento'} label="Orçamento / Carrinho" icon="fa-credit-card" />
              <NavItem to={'/locacoes'} label="Locações / Devoluções" icon="fa-shopping-cart" /> */}

              <li className="nav-item">
                <Link to="/admin/marcadores" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Marcadores</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/produtores" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Produtores</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Painel Administrativo</h1>
              </div>
              <div className="col-sm-6">{/* <Breadcrumb /> */}</div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
