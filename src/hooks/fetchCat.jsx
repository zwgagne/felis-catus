import { useEffect, useState } from 'react';
import someCat from '../api/CatApi';


const Cats = () => {

  const [ catsData, setCatsData ] = useState([])

  const fetchData = async () => {
    const catsData = await someCat.fetchSomeCat();
    setCatsData(catsData)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return catsData.map((cat) => {
    return {
      url: cat.url,
      id: cat.id
    }
  })
}

export default Cats;