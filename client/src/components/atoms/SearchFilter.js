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
  const { onChange, setGrid, setFlex, layoutStyle } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div className='search-filter'>
      <div className='flex-container'>
        <p>Your brands</p>
      </div>
      <div className='search-container'>
        <input placeholder='Search brands...' onChange={onChange} />
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </div>
      {windowWidth > 1048 && (
        <div className='flex-container'>
          <FontAwesomeIcon
            icon={faThLarge}
            className={
              layoutStyle === 'brands-grid-container'
                ? 'layout-icon orange'
                : 'layout-icon'
            }
            onClick={setGrid}
            onKeyDown={(e) => (e.key === 'Enter' ? setGrid() : null)}
            tabIndex={0}
          />
          <FontAwesomeIcon
            icon={faBars}
            className={
              layoutStyle !== 'brands-grid-container'
                ? 'layout-icon orange'
                : 'layout-icon'
            }
            onClick={setFlex}
            onKeyDown={(e) => (e.key === 'Enter' ? setFlex() : null)}
            tabIndex={0}
          />
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
