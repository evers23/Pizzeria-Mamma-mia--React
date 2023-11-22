import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Header />

      <Container fluid>
        <Row>
          <CardPizza />
        </Row>
      </Container>
    </Container>
  );
}
