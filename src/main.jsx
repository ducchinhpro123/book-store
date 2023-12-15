import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {CardProductProvider} from "./components/Cart/CardProductProvider.jsx";
import {CartProvider} from "./components/Cart/CartContext.jsx";
// import {RouterProvider} from "react-router-dom";

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/cart',
    element: <DefaultLayout/>
  }
])
 */

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <CartProvider>
        <CardProductProvider>
          <App/>
        </CardProductProvider>
      </CartProvider>
     {/* <TestFirebase/>
      <TestSignIn/>*/}

    </React.StrictMode>
);
