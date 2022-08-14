import { DefaultLayout, HeaderOnly } from '~/component/Layout';
import { Home, Pricing, Seclude } from '~/component/pages';

const publicRouters = [
  { path: '/', element: Home, layout: DefaultLayout },
  { path: '/pricing', element: Pricing, layout: DefaultLayout },
  { path: '/seclude', element: Seclude, layout: HeaderOnly },
];

const privateRouters = [];

export { privateRouters, publicRouters };
