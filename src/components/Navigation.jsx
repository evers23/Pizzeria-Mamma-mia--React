import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navigation() {
  const { total } = useContext(CartContext);

  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive ? `text-white ${styleActive}` : ` text-info ${styleActive}`;
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="text-center">
          <Navbar.Brand>
            <NavLink to="/" className="text-white text-decoration-none me-3">
              🍕 Pizzería Mamma mía de Don michele
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/carrito" className={isActiveLink}>
              🛒 $ {total}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

