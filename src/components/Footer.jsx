import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Row className="mt-5">
        <Col lg={1}></Col>
        <Col lg={3}>
          <div style={{ marginTop: "-10px" }} className="me-4">
            <FontAwesomeIcon
              className="fs-3 text-warning me-2"
              icon={faVideo}
            />
            <span className="fs-3 text-white">Video Player</span>
            <p style={{ textAlign: "justify", color: "white" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit atque animi repudiandae, quis harum quasi modi fuga
              rerum doloribus consectetur ad asperiores odio ducimus adipisci
              perferendis molestias eveniet tenetur placeat!
            </p>
          </div>
        </Col>
        <Col lg={2}>
          <div className="ms-5">
            <h4>Links</h4>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Landing Page
            </Link>
            <br />
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Home Page
            </Link>
            <br />
            <Link
              to={"watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Watch History
            </Link>
          </div>
        </Col>
        <Col lg={2}>
          <div className="ms-4">
            <h4>Guides</h4>
            <Link style={{ textDecoration: "none", color: "white" }}>
              React
            </Link>
            <br />
            <Link
              target="_blank"
              to={"https://react-bootstrap.netlify.app/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              React Bootstrap
            </Link>
            <br />
            <Link
              target="_blank"
              to={"https://bootswatch.com/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Bootswatch
            </Link>
          </div>
        </Col>
        <Col lg={3} md={5}>
          <h4>Contact Us</h4>
          <form className="d-flex flex-row" action="">
            <input
              className="form-control me-2"
              type="email"
              placeholder="Enter Your Email"
            />
            <Button type="submit" className="btn btn-warning">
              Subscribe
            </Button>
          </form>

          <div className="d-flex justify-content-evenly mt-4">
            <Link style={{ color: "white" }}>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{ color: "white" }}>
              <i class="fa-brands fa-x-twitter fa-2x"></i>
            </Link>
            <Link style={{ color: "white" }}>
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </Link>
            <Link style={{ color: "white" }}>
              <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
          </div>
        </Col>
      </Row>
      <p className="text-center mt-3">
        Copyright &copy; 2023 Media Player. Built with React
      </p>
    </>
  );
}

export default Footer;
