import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Producer as ProducerProps } from '../../../entities/Producer';

// Layout
import Layout from '../../Layouts/Admin';

const Producers: React.FC = () => {
  const [producers, setProducers] = useState<ProducerProps[]>([]);

  useEffect(() => {
    const producers = sessionStorage.getItem('producers') || '';
    setProducers(JSON.parse(producers));
  }, []);

  return (
    <Layout>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Produtores</h3>
        </div>
        <div className="card-body p-0">
          <table className="table table-sm">
            <thead>
              <tr>
                <th style={{ width: 10 }}>#</th>
                <th>Tipo</th>
                <th>Nome</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              {producers.map((producer) => {
                return (
                  <tr>
                    <td>{producer.id}.</td>
                    <td>{producer.type}</td>
                    <td>
                      <Link to={`/admin/produtores/${producer.id}`}>{producer.name}</Link>
                    </td>
                    <td>{producer.lat}</td>
                    <td>{producer.lng}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Producers;
