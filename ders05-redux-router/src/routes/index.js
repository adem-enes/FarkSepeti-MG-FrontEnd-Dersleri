import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('../pages/CounterPage')),
        exact: true
    },
    {
        path: '/urunler',
        component: lazy(() => import('../pages/Products')),
        exact: true
    },
    {
        path: '/sepet',
        component: lazy(() => import('../pages/Checkout')),
        exact: true
    },
    {
        path: '*',
        component: lazy(() => import('../pages/NotFound404')),
        exact: true
    },
];

export default routes;