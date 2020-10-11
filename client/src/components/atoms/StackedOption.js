import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const StackedOption = (props) => {
  const { firstIcon, secondIcon, firstOption, secondOption } = props;
  const [isActive, setActive] = useState(false);

  return (
    <Fragment>
      <li tabIndex={1}>
        <div class='nav-option'>
          <FontAwesomeIcon icon={firstIcon} className='option-icon' />
          <p>{firstOption}</p>
          <FontAwesomeIcon
            onClick={() => setActive(!isActive)}
            onKeyDown={(e) => (e.key === 'Enter' ? setActive(!isActive) : null)}
            icon={isActive ? faAngleUp : faAngleDown}
            className='option-icon arrow'
            tabIndex={1}
          />
        </div>
      </li>
      {isActive && (
        <li tabIndex={1}>
          <div class='nav-option left-margin'>
            <FontAwesomeIcon icon={secondIcon} className='option-icon' />
            <p>{secondOption}</p>
          </div>
        </li>
      )}
    </Fragment>
  );
};

export default StackedOption;
