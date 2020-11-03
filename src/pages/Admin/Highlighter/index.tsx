import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Highlighter as HighlighterProps } from '../../../entities/Highlighter';

// Layout
import Layout from '../../Layouts/Admin';

interface RouterProps {
  id: string;
}

const Highlighter: React.FC = () => {
  const params = useParams<RouterProps>();
  const [highlighter, setHighlighter] = useState<HighlighterProps>();

  useEffect(() => {
    const highlighters = sessionStorage.getItem('highlighters');
    if (highlighters) {
      const _highlighters = JSON.parse(highlighters);
      console.log(_highlighters);
      const highlighter = _highlighters.find((highlighter: HighlighterProps) => {
        return highlighter.id === Number(params.id);
      });
      console.log(highlighter);
      setHighlighter(highlighter);
    }
  }, [params.id]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  
  return (
    <Layout>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">
            <strong>
              {highlighter?.id} - {highlighter?.name}
            </strong>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Nome Propriedade</label>
                  <input type="text" className="form-control" id="name" name="name" value={highlighter?.name} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="lat">Latitude</label>
                  <input type="text" className="form-control" id="lat" name="lat" value={highlighter?.lat} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="lng">Longitude</label>
                  <input type="text" className="form-control" id="lng" name="lng" value={highlighter?.lng} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Highlighter;
