import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { uploadVideoApi } from "../services/allAPI";

function Add({ setuploadVideoStatus }) {
  const [show, setShow] = useState(false);
  const [video, setvideo] = useState({
    id: "",
    caption: "",
    imageUrl: "",
    embedLink: "",
  });
  console.log(video);

  const getEmbedLink = (e) => {
    console.log(e.target.value);
    const text = e.target.value;
    if (text.startsWith("https://youtu.be")) {
      console.log(text.slice(17, 28));
      const link = `https://www.youtube.com/embed/${text.slice(
        17,
        28
      )}?autoplay=1`;
      setvideo({ ...video, embedLink: link });
    } else {
      console.log(text.slice(-11));
      const link = `https://www.youtube.com/embed/${text.slice(
        -11
      )}?autoplay=1`;
      setvideo({ ...video, embedLink: link });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async () => {
    const { id, caption, imageUrl, embedLink } = video;
    console.log(id, caption, imageUrl, embedLink);
    if (!id || !caption || !imageUrl || !embedLink) {
      alert("Please fill the form completely");
    } else {
      const response = await uploadVideoApi(video);
      console.log(video);
      if (response.status >= 200 && response.status < 300) {
        alert("video uploaded successfully");
        setuploadVideoStatus(response.data)
        setvideo({
          id: "",
          caption: "",
          imageUrl: "",
          embedLink: "",
        });
        handleClose();
      } else {
        console.log(response);
        alert("something went wrong");
      }
    }
  };

  return (
    <>
      <Button onClick={handleShow} className="border bg-transparent mt-4">
        Upload new video <i class="fa-solid fa-cloud-arrow-up"></i>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i style={{ color: "orange" }} class="fa-solid fa-film"></i> Upload
            Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-white">Please fill the following details</p>
          <form className="border border-secondary rounded p-3">
            <Form.Control
              onChange={(e) => setvideo({ ...video, id: e.target.value })}
              type="text"
              placeholder="Enter video ID"
            />
            <br />
            <Form.Control
              onChange={(e) => setvideo({ ...video, caption: e.target.value })}
              type="text"
              placeholder="Enter video Caption"
            />
            <br />
            <Form.Control
              onChange={(e) => setvideo({ ...video, imageUrl: e.target.value })}
              type="text"
              placeholder="Enter video Url"
            />
            <br />
            <Form.Control
              onChange={(e) => getEmbedLink(e)}
              type="text"
              placeholder="Enter Youtube Video Link"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
