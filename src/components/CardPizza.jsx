import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import CartContext from "../context/CartContext";

function CardPizza() {
  const { pizzas, addCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlerClick = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <>
      {pizzas.map((pizza) => {
        return (
          <Col key={pizza?.id}>
            <Card
              border="warning"
              style={{
                backgroundColor: "#FDFEFE",
                color: "#273746",
                width: "25rem",
                margin: "auto",
                marginTop: "3rem",
                fontWeight: "bolder",
              }}
            >
              <Card.Img src={pizza?.img} />
              <Card.Body>
                <Card.Title>{pizza?.name}</Card.Title>
                <Card.Text style={{ fontWeight: "bold" }}>Ingredientes:</Card.Text>
                {pizza.ingredients?.map((ingredient) => (
                  <Card.Text key={ingredient}>🍕{ingredient}</Card.Text>
                ))}
                <div className="d-flex justify-content-around">
                  <Button
                    variant="outline-primary"
                    onClick={() => handlerClick(pizza.id)}
                  >
                    Ver más 👀
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => addCart(pizza)}
                  >
                    Añadir 🛒
                  </Button>
                </div>
                <Card.Footer className="text-center">
                  ${pizza?.price}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default CardPizza;
