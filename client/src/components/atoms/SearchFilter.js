import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faThLarge,
  faBars,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

const SearchFilter = (props) => {
  const { onChange } = props;
  return (
    <div className='search-filter'>
      <div className='flex-container'>
        <p>Your brands</p>
        <FontAwesomeIcon icon={faAngleUp} className='arrow-icon' />
      </div>
      <div className='flex-container'>
        <input placeholder='Search brands...' onChange={onChange} />
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </div>
      <div className='flex-container'>
        <FontAwesomeIcon icon={faThLarge} className='layout-icon' />
        <FontAwesomeIcon icon={faBars} className='layout-icon' />
      </div>
    </div>
  );
};

export default SearchFilter;
