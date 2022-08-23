import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
const Navigation = () => {
  return (
    <>
      <Container >
        <Navbar expand="lg" variant="light" bg="light">
          <Container className="navigationHeader">
            <Navbar.Brand className="navbar" href="#">
              Employee List
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              OT
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Leave
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Support
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Checking
            </Navbar.Brand>
            <BsFillBellFill className="navbar bell" />
            <FaUserCircle className="navbar user" />
          </Container>
        </Navbar>
      </Container>
    </>
  );
};
export default Navigation;
