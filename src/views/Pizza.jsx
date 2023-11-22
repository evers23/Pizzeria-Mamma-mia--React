import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import CartContext from "../context/CartContext";

export default function Pizza() {
  const { id } = useParams();
  const { pizzas, addCart } = useContext(CartContext);
  const [pizza, setPizza] = useState();

  const filterPizza = () => {
    const [findPizza] = pizzas.filter((pizza) => pizza.id === id);
    console.log(findPizza);
    setPizza(findPizza);
  };

  useEffect(() => {
    filterPizza();
  }, [id]);

  if (!pizza) return <div>producto no disponible</div>;

  return (
    <div className="pizza">
      <Card className="cardPizza" border="info">
        <Card.Img src={pizza?.img} />
        <Card.Body>
          <Card.Title>{pizza?.name}</Card.Title>
          <Card.Text>{pizza?.desc}</Card.Text>
          {pizza.ingredients.map((ingredient) => (
            <Card.Text key={ingredient}>🍕{ingredient}</Card.Text>
          ))}
          <img
            src="/public/pizza.jpg"
            alt="Pizza"
            style={{ width: "5rem", margin: "1px 15px" }}
          />
          <Button variant="outline-warning" onClick={() => addCart(pizza)}>
            Añadir 🛒
          </Button>
          <img
         src="/public/pizza.jpg"
            alt="Pizza"
            style={{ width: "5rem", margin: "1px 15px" }}
          />
          <Card.Footer className="border-success text-info text-center">
            ${pizza.price}
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

