// Repositories
import producerRepository from './Producer';
import productRepository from './Product';
import highlighterRepository from './Highlighter';

const loadData = async () => {
  const products = sessionStorage.getItem('products');
  if (!products) {
    const response = await productRepository.getAll();
    sessionStorage.setItem('products', JSON.stringify(response));
  }

  let producers = sessionStorage.getItem('producers');
  if (!producers) {
    const response = await producerRepository.getAll();
    producers = JSON.stringify(response);
    sessionStorage.setItem('producers', JSON.stringify(response));
  }

  let highlighters = sessionStorage.getItem('highlighters');
  if (!highlighters) {
    const response = await highlighterRepository.getAll();
    highlighters = JSON.stringify(response);
    sessionStorage.setItem('highlighters', JSON.stringify(response));
  }

  return {
    producers: producers ? JSON.parse(producers) : [],
    highlighters: highlighters ? JSON.parse(highlighters) : [],
  };
};

export default { loadData };
