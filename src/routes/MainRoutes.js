import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import Layout from '../pages/Layout';
import NewContactPage from '../pages/contacts/NewContactPage';

const MainRoutes = () => {

  const PUBLIC_ROUTES = [
    {
      id: 1,
      element: <HomePage />,
      path: '/'
    },
    {
      id: 2,
      element: <AboutPage />,
      path: '/about'
    },
    {
      id: 3,
      element: <NewContactPage />,
      path: '/add'
    }
  ]

  return (
    <Routes>
      <Route element={<Layout />}>
        {
          PUBLIC_ROUTES.map((route) => (
            <Route element={route.element} path={route.path} key={route.id} />
          ))
        }
      </Route>
    </Routes>
  );
};

export default MainRoutes;