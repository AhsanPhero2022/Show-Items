import { Container, Navbar } from "react-bootstrap";

const NavItem = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <div className="d-flex gap-3 align-items-center">
            <img
              className="w-25 "
              src="https://i.ibb.co/Ph3jG2z/download.png"
              alt=""
            />

            <h3>
              QuadB<small className="text-text-uppercase">Tech</small>
            </h3>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavItem;
