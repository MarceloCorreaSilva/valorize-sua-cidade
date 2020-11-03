import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Highlighter as HighlighterProps } from '../../../entities/Highlighter';

// Layout
import Layout from '../../Layouts/Admin';

const Highlighters: React.FC = () => {
  const [highlighters, setHighlighters] = useState<HighlighterProps[]>([]);

  useEffect(() => {
    const highlighters = sessionStorage.getItem('highlighters') || '';
    setHighlighters(JSON.parse(highlighters));
  }, []);

  return (
    <Layout>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Marcadores</h3>
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
              {highlighters.map((highlighter) => {
                return (
                  <tr>
                    <td>{highlighter.id}.</td>
                    <td>{highlighter.type}</td>
                    <td>
                      <Link to={`/admin/marcadores/${highlighter.id}`}>{highlighter.name}</Link>
                    </td>
                    <td>{highlighter.lat}</td>
                    <td>{highlighter.lng}</td>
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

export default Highlighters;
