import React, { useEffect, useState } from 'react';

// Layout
import Layout from '../Layouts/Default';

// Components
import FormSearch from '../../components/FormSearch';
import Maps from '../../components/Maps';

// Repositories
import GoogleSpreadsheetRepository from '../../repositories/GoogleSpreadsheet';

// Entities / Props
import { Producer } from '../../entities/Producer';
import { Table } from '../../components/Html';
import { Highlighter } from '../../entities/Highlighter';
import Loader from '../../components/Loader';

const Home = () => {
  const [producers, setProducers] = useState<Producer[]>([]);
  const [highlighters, setHighlighters] = useState<Highlighter[]>([]);

  const [sessionProducers, setSessionProducers] = useState<Producer[]>([]);
  const [sessionHighlighters, setSessionHighlighters] = useState<Highlighter[]>([]);

  const [loading, setLoading] = useState(false);

  // Load Data From Google Spreadsheets
  useEffect(() => {
    setLoading(true);
    GoogleSpreadsheetRepository.loadData()
      .then((response) => {
        setSessionProducers(response.producers);
        setSessionHighlighters(response.highlighters);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <FormSearch
                sessionProducers={sessionProducers}
                sessionHighlighters={sessionHighlighters}
                handleProducersFilters={(producers) => {
                  setProducers(producers);
                }}
                handleHighlightersFilters={(highlighters) => {
                  setHighlighters(highlighters);
                }}
              />
            </>
          )}

          <Maps producers={producers} highlighters={highlighters} />

          {producers && producers.length > 0 && (
            <>
              <hr />
              <div className="uk-container">
                {producers.map((producer, index) => (
                  <Table key={index} data={producer} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
