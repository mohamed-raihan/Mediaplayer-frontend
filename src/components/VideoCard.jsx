import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToHistory, deleteVideo } from "../services/allAPI";

function VideoCard({ displayVideo, setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //function to add a video
  const handleShow = async () => {
    setShow(true);

    let caption = displayVideo.caption;
    let url = displayVideo.embedLink;
    let time = new Date();
    let timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);

    let reqBody = {
      caption,
      url,
      timeStamp,
    };
    const response = await addToHistory(reqBody);
    // console.log(response);
  };

  // function to delete a video
  const handleDelete = async (id) => {
    const response = await deleteVideo(id);
    setDeleteVideoStatus(true);
    // console.log(response);
  };

  const videoDrag = (e, id) => {
    console.log(`card with id ${id} is dragged`);
    e.dataTransfer.setData("videoId", id);
  };

  // console.log(displayVideo);
  return (
    <>
      <Card
        style={{ width: "100%" }}
        draggable
        onDragStart={(e) => videoDrag(e, displayVideo.id)}
      >
        {!isPresent ? (
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={displayVideo?.imageUrl}
          />
        ) : null}
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Text>{displayVideo?.caption}</Card.Text>
          {!isPresent && (
            <Button
              onClick={() => handleDelete(displayVideo?.id)}
              variant="danger"
            >
              <i class="fa-solid fa-trash"></i>
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="566"
            src={`${displayVideo?.embedLink}`}
            title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
