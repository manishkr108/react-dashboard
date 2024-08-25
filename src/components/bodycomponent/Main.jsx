import React from 'react';
import './main.css';
import PageTitle from './PageTitle';
import Dashboard from '../dashboard/Dashboard';

function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle page="Dashborad"/>
        <Dashboard />
    </main>
  );
}

export default Main