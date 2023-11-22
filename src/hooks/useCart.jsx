import { useState } from "react";
import { useFetch } from "./useFetch";

export function useCart() {
  const { data: pizzas } = useFetch("/pizzas.json");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("0");

  const addCart = (pizza) => {
    setTotal(+total + pizza.price);

    const pizzaInCart = cart.findIndex((item) => item.id === pizza.id);

    if (pizzaInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[pizzaInCart].quantity += 1;

      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...pizza,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
    setTotal("0");
  };

  const removeFromCart = (pizza) => {
    const newCart = cart.flatMap((p) => {
      if (p.id === pizza.id) {
        setTotal(+total - pizza.price);
        if (p.quantity > 1) {
          p.quantity -= 1;
          return p;
        }
        return [];
      }
      return p;
    });
    setCart(newCart);
  };
  const addOneMore = (pizza) => {
    setTotal(+total + pizza.price);
    const pizzaInCart = cart.findIndex((item) => item.id === pizza.id);

    if (pizzaInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[pizzaInCart].quantity += 1;

      return setCart(newCart);
    }
  };

  return {
    pizzas,
    total,
    cart,
    addCart,
    addOneMore,
    clearCart,
    removeFromCart,
  };
}
