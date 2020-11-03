import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Producer as ProducerProps } from '../../../entities/Producer';

// Layout
import Layout from '../../Layouts/Admin';

interface RouterProps {
  id: string;
}

const Producer: React.FC = () => {
  const params = useParams<RouterProps>();
  const [producer, setProducer] = useState<ProducerProps>();

  useEffect(() => {
    const producers = sessionStorage.getItem('producers');
    if (producers) {
      const _producers = JSON.parse(producers);
      const producer = _producers.find((producer: ProducerProps) => {
        return producer.id === Number(params.id);
      });
      console.log({ producer: producer });
      setProducer(producer);
      //   setProducer({
      //     id: producer.id,
      //     updated_at: 'string',
      //     type: 'string',
      //     name: 'string',
      //     owner: 'string',
      //     state_registration: 'string',
      //     employees: 0,
      //     total_area: 0,
      //     vegetable_garden_area: 0,
      //     orchard_area: 0,
      //     irrigated: true,
      //     covered_planting: true,
      //     vehicles: 0,
      //     commercialization: [],
      //     lat: 0,
      //     lng: 0,
      //     products: [],
      //   });
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
              {producer?.id} - {producer?.name}
            </strong>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="owner">Nome Proprietário</label>
              <input type="text" className="form-control" id="owner" name="owner" value={producer?.owner} />
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Nome Propriedade</label>
                  <input type="text" className="form-control" id="name" name="name" value={producer?.name} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="lat">Latitude</label>
                  <input type="text" className="form-control" id="lat" name="lat" value={producer?.lat} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="lng">Longitude</label>
                  <input type="text" className="form-control" id="lng" name="lng" value={producer?.lng} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="state_registration">Inscrição Estadual</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state_registration"
                    name="state_registration"
                    value={producer?.state_registration}
                  />
                </div>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="employees">Nº Empregados</label>
                  <input
                    type="text"
                    className="form-control"
                    id="employees"
                    name="employees"
                    value={producer?.employees}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="vehicles">Nº Veiculos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vehicles"
                    name="vehicles"
                    value={producer?.vehicles}
                  />
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="total_area">Area Total</label>
                  <input
                    type="text"
                    className="form-control"
                    id="total_area"
                    name="total_area"
                    value={producer?.total_area}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="vegetable_garden_area">Area de Horta</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vegetable_garden_area"
                    name="vegetable_garden_area"
                    value={producer?.vegetable_garden_area}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="orchard_area">Area de Pomar</label>
                  <input
                    type="text"
                    className="form-control"
                    id="orchard_area"
                    name="orchard_area"
                    value={producer?.orchard_area}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="irrigated">Cultivo Irrigado</label>
                  <input
                    type="text"
                    className="form-control"
                    id="irrigated"
                    name="irrigated"
                    value={String(producer?.irrigated)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="covered_planting">Cultivo Protegido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="covered_planting"
                    name="covered_planting"
                    value={String(producer?.covered_planting)}
                  />
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>

            <div className="form-group">
              <label htmlFor="commercialization">Comercialização</label>
              <input
                type="text"
                className="form-control"
                id="commercialization"
                name="commercialization"
                value={producer?.commercialization}
              />
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

export default Producer;
