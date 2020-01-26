import React from 'react';

const Invest = React.lazy(() => import('./views/Invest/Invest'));
const Analytics = React.lazy(() => import('./views/Analytics/Analytics'));
const OverallDash = React.lazy(() => import('./views/OverallDash/OverallDash'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/invest', name: "Invest", component: Invest },
  { path: '/analytics', name: "Analytics", component: Analytics },
  { path: '/dashboard', name: 'Overall Dashboard', component: OverallDash } 
];

export default routes;
