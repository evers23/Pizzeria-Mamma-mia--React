import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";


export default function Cart() {
  const {
    addOneMore,
    cart,
    clearCart,
    total,
    removeFromCart
  } = useContext(CartContext);

  const renderCartItem = (pizza) => (
    <li key={pizza?.id} className="list">
      <div>
        <img src={pizza?.img} alt={pizza?.name} style={{ width: "15rem" }} />
        <h4 className="p-4">{pizza?.name}</h4>
      </div>
      <div>
        ${pizza.quantity * pizza.price}
        <Button
          className="mx-4"
          variant="outline-danger"
          onClick={() => removeFromCart(pizza)}
        >
          -
        </Button>
        <span>{pizza.quantity}</span>
        <Button
          className="mx-4"
          variant="outline-info"
          onClick={() => addOneMore(pizza)}
        >
          +
        </Button>
      </div>
    </li>
  );

  return (
    <div className="forCart">
      {/* ... (código existente) */}
      <div className="cart">
        <h2 className="text-white p-4">Detalles pedido:</h2>
        <div>
          <ul>{cart?.map(renderCartItem)}</ul>
        </div>
        <h2 className="text-white">
          Total: $<span className="text-success">{total}</span>
        </h2>
        <div className="buttons">
          <Button variant="outline-warning" onClick={clearCart}>
            Limpiar carrito
          </Button>
          <Button variant="outline-success">
            <NavLink to="/thanks" className="text-decoration-none text-white">
              Ir a pagar
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
