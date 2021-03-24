import React from "react";

import {
  Link,
  Route,
  Routes,
  Navigate,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import { AppBar } from "./AppBar";
import { ServiceProvider } from "./Service";

const ProductList = React.lazy(() => import("productlist/ProductList"));
const ProductDetails = React.lazy(() =>
  import("productdetails/ProductDetails")
);

const Shell = () => (
  <ServiceProvider>
    <BrowserRouter>
      <AppBar />
      <div className="container mt-24">
        <React.Suspense fallback={"Loading"}>
          <Routes>
            <Route path="list/*" element={<ProductList />} />
            <Route path="detail/*" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/list" replace />} />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  </ServiceProvider>
);

export default Shell;
