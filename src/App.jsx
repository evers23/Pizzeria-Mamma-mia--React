import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Pizza from "./views/Pizza";
import Navigation from "./components/Navigation";
import NotFound from "./views/NotFound";
import { useCart } from "./hooks/useCart";
import CartContext from "./context/CartContext";
import Thanks from "./views/Thanks";

function App() {
  const allState = useCart();

  return (
    <CartContext.Provider value={allState}>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
