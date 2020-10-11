import React from 'react';

const ButtonsBlock = () => {
  return (
    <div className='brand-block'>
      <ul>
        <li tabIndex={1}>
          <p>All Phases</p>
        </li>
        <li tabIndex={1}>
          <p>Monitoring</p>
        </li>
        <li tabIndex={1}>
          <p>Amazon Cases</p>
        </li>
        <li tabIndex={1}>
          <button className='main-btn'>Dashboard</button>
        </li>
        <li>
          <button className='white-btn'>Product Catalog</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonsBlock;
