import React from 'react';
import Calendar from '../components/Calendar/components/Calendar';
import useAppContext from '../hook/useAppContext';

function Main() {

    return ( 
        <div className="home-page__container _container">
            <Calendar/>
        </div>
    )
}

export default Main;
