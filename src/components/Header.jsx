import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <div className="header">
        <div className="p-4">
          <h1>! Pizzería Mamma mía de Don michele ¡</h1>
          <p>! tenemos las mejores pizzas que podrás encontrar ¡</p>
        </div>
        <img src="/pizze.png" alt="pizze" />
        
      </div>
    </Container>
  );
}

export default Header;