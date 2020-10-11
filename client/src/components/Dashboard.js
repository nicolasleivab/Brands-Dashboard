import React from 'react';
import { useEffect, useState } from 'react';
import BrandBlock from './atoms/BrandBlock';
import SearchFilter from './atoms/SearchFilter';
import ButtonsBlock from './atoms/ButtonsBlock';
import axios from 'axios';

const Dashboard = () => {
  const [brands, setBrands] = useState([]);
  const [storedBrands, storeBrands] = useState([]);

  const getBrands = async () => {
    try {
      const res = await axios.get('/api/brands');

      storeBrands(res.data);
      setBrands(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  const filterBrands = (e) => {
    const filteredBrands = storedBrands.filter((brand) =>
      brand.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setBrands(filteredBrands);
  };

  return (
    <div>
      <div className='dashboard-title'>Brands</div>
      <div className='brands-container'>
        <SearchFilter onChange={(e) => filterBrands(e)} />
        <div className='grid-container'>
          <ButtonsBlock />
          {brands.length > 0 ? (
            brands.map((brand) => (
              <BrandBlock key={brand.name} imgUrl={brand.imgUrl} />
            ))
          ) : (
            <p style={{ marginTop: 50, fontStyle: 'italic' }}>
              Sorry, not found...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
