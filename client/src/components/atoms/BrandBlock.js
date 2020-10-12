import React from 'react';

const BrandBlock = (props) => {
  const { imgUrl, name } = props;
  return (
    <div className='brand-block'>
      <img src={imgUrl} width={150} alt={name} />
    </div>
  );
};

export default BrandBlock;
