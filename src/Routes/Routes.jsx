import config from "../config";
// import Body from "../Pages/Body/Body";
import  homePage from '../Pages/homePage/homePage'
import Cart from "../Pages/Cart/Cart";
export const publicRoutes = [
  { path: config.routes.homePage, component: homePage },
  { path: config.routes.cart, component: Cart},
];