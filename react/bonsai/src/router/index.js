import { DefaultLayout, HeaderOnly } from "~/component/Layout";
import { Home, Pricing, Seclude } from "~/component/pages";

const publicRouters = [
  { path: "/", element: Home, layout: DefaultLayout },
  { path: "/pricing", element: Pricing, layout: HeaderOnly },
  { path: "/seclude", element: Seclude, layout: null },
];

const privateRouters = [];

export { privateRouters, publicRouters };
