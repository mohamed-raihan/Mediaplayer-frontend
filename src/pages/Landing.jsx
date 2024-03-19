import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Row className="mt-5">
        <Col lg={1}></Col>
        <Col lg={5}>
          <div>
            <h3 className="text-white">
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              vel optio quas, omnis odit accusantium reiciendis reprehenderit,
              error porro necessitatibus dolores unde et voluptas ullam rem at
              inventore sed itaque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe animi, consequatur exercitationem vero
              rerum, excepturi distinctio minus laborum omnis optio tempora
              doloribus beatae odio! Quia harum quisquam voluptate molestias
              voluptas.
            </p>
            <Link to={"/home"}>
              <Button className="mt-5" variant="warning">
                Get started <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </Link>
          </div>
        </Col>
        <Col lg={5}>
          <img
            className="rounded ms-4"
            width={"600px"}
            src="https://i.pinimg.com/originals/69/80/58/698058d1d4f38bd1ceef0b3eed72f7aa.gif"
            alt=""
          />
        </Col>
        <Col lg={1}></Col>
      </Row>

      <div className="d-flex align-items-center justify-content-center flex-column mt-5">
        <h2>Features</h2>
        <div className="d-flex aling-items-center justify-content-center mt-3">
          <Card className="m-4" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"
            />
            <Card.Body>
              <Card.Title className="text-center">Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/a7/b0/15/a7b015d343ad801ad6da8c242dc6ae06.gif"
            />
            <Card.Body>
              <Card.Title className="text-center">Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/0b/b0/06/0bb006c2627320d50126bab4bf440a26.gif"
            />
            <Card.Body>
              <Card.Title className="text-center">Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="d-flex aling-items-center justify-content-center">
        <div className="border border-white mt-4 w-75 p-5">
          <Row>
            <Col lg={5}>
              <h4 className="text-warning">Simple fast and Powerful</h4>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-5 me-1">Play Everything:</span>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Et, expedita sequi
                hic optio possimus doloribus. Sapiente dolorem perferendis sed
                culpa, alias cumque ea, inventore magnam quas quam quo,
                repellendus quibusdam?
              </p>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-5 me-1">Play Everything:</span>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. In iusto quidem
                labore praesentium suscipit nisi maiores qui aperiam architecto
                magni commodi quod nobis eaque aspernatur deserunt tempore a,
                quisquam debitis.
              </p>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-5 me-1">Play Everything:</span>Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eius voluptatem
                tempore deserunt omnis? Velit iure nobis quo vel in nihil sunt
                vero corrupti blanditiis veritatis aut veniam, quibusdam, sit
                ad.
              </p>
            </Col>
            <Col lg={1}></Col>
            <Col lg={6}>
              <iframe
                className="rounded"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9AizchSQURA"
                title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Landing;
