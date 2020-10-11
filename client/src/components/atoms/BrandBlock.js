import React from 'react';

const BrandBlock = (props) => {
  const { imgUrl } = props;
  return (
    <div className='brand-block'>
      <img src={imgUrl} width={150} />
    </div>
  );
};

export default BrandBlock;
