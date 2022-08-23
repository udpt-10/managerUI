import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  CheckingListURL,
  EmployeeListURL,
  OTRequestListURL,
  leaveRequestlistURL,
  supportRequestListURL,
} from "../constans";
const Navigation = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container className="navigationHeader">
            <Navbar.Brand className="navbar">
              <Link to={EmployeeListURL}>Employee List</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar">
              <Link to={OTRequestListURL}>OT Request</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar">
              <Link to={leaveRequestlistURL}>Leave</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              <Link to={supportRequestListURL}>Support Request</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              <Link to={CheckingListURL}>Checking</Link>
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
