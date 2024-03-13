import { Suspense, lazy } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';

const Game = lazy(() => import('../pages/Game').then((module) => ({ default: module.Game })));
const Greeting = lazy(() => import('../pages/Greeting').then((module) => ({ default: module.Greeting })));
const Map = lazy(() => import('../pages/Map').then((module) => ({ default: module.Map })));
const Result = lazy(() => import('../pages/Result').then((module) => ({ default: module.Result })));
const Theory = lazy(() => import('../pages/Theory').then((module) => ({ default: module.Theory })));
const Loading = lazy(() => import('../pages/Loading').then((module) => ({ default: module.Loading })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Map />,
  },
  {
    path: '/greeting/:page',
    element: <Greeting />,
  },
  {
    path: '/theory/:page',
    element: <Theory />,
  },
  {
    path: '/game',
    element: <Outlet />,
    children: [
      {
        path: '/game/bank',
        element: <Game />,
      },
    ],
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/greeting/:page' element={<Greeting />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />}></Route>
      </Routes> */}
      <RouterProvider router={router} />
    </Suspense>
  );
}
