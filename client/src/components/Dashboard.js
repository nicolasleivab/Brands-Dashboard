import React from 'react';
import { useEffect, useState } from 'react';
import BrandBlock from './atoms/BrandBlock';
import axios from 'axios';

const Dashboard = () => {
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      const res = await axios.get('/api/brands');

      setBrands(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
      <div className='dashboard-title'>Brands</div>
      <div className='grid-container'>
        {brands.length > 0 &&
          brands.map((brand) => (
            <BrandBlock key={brand.name} imgUrl={brand.imgUrl} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
