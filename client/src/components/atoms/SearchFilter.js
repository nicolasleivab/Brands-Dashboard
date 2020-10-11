import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowSize from '../../hooks/useWindowSize';
import {
  faSearch,
  faThLarge,
  faBars,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

const SearchFilter = (props) => {
  const { onChange } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div className='search-filter'>
      <div className='flex-container'>
        <p>Your brands</p>
        <FontAwesomeIcon icon={faAngleUp} className='arrow-icon' />
      </div>
      <div className='search-container'>
        <input placeholder='Search brands...' onChange={onChange} />
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </div>
      {windowWidth > 1048 && (
        <div className='flex-container'>
          <FontAwesomeIcon icon={faThLarge} className='layout-icon' />
          <FontAwesomeIcon icon={faBars} className='layout-icon' />
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
