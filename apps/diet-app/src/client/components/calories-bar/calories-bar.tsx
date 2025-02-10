import React from 'react';
import { Fire, Flag, Fork } from '../icons/icons';

const CaloriesBar = () => {
  const divRoundStyle = 'p-2 border rounded-full';
  const pStyle = 'flex items-center gap-4';
  const liStyle = 'flex items-center gap-2';

  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg ">
      <div className='flex flex-col gap-2'>
        <div className="h-1 w-full bg-[#88D504]/50 rounded"></div>
        <div className="flex justify-between real">
          <div className="flex gap-4">
            <p className={pStyle}>
              <Fork /> 0 kcal
            </p>
            <p className={pStyle}>
              <Fire /> 0 kcal
            </p>
          </div>
          <div>
            <p className={pStyle}>
              {' '}
              <Flag /> 0/1700 kcal
            </p>
          </div>
        </div>
      </div>
      <ul className="flex justify-around">
        <li className={liStyle}>
          <div className={divRoundStyle}></div>
          P: 0/112
        </li>
        <li className={liStyle}>
          <div className={divRoundStyle}></div>
          F: 0/56
        </li>
        <li className={liStyle}>
          <div className={divRoundStyle}></div>
          C: 0/150
        </li>
      </ul>
    </div>
  );
};

export default CaloriesBar;
