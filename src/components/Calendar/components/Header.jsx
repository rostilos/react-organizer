import React from 'react';

function Header() {

  return (
    <div className='cal-month__header cal-header'>
        <div className="cal-header__week-days">
            <div className="cal-header__week-day">Mon</div>
            <div className="cal-header__week-day">Tue</div>
            <div className="cal-header__week-day">Wed</div>
            <div className="cal-header__week-day">Thu</div>
            <div className="cal-header__week-day">Fri</div>
            <div className="cal-header__week-day">Sat</div>
            <div className="cal-header__week-day">Sun</div>
        </div>
    </div>
  );
}

export default Header;
