import React from 'react';

import Months from './Months';
import Years from './Years';

function Toolbar({ currentMonth }) {
  return (
    <div class="toolbar">
      <div className="toobar-actions">
        <Months currentMonthName={currentMonth} />
        <Years />
      </div>
    </div>
  );
}

export default Toolbar;
