import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand style={{ marginLeft: "-20px" }} href="#home">
          <FontAwesomeIcon className="fs-3 text-warning" icon={faVideo} beat />
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <span className="text-white ms-2 fs-3 ">Media Player</span>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
