import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import {
  addtoCategory,
  deleteCategory,
  getAVideoApi,
  getCategory,
  updateCategory,
} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addCategoryStatus, setAddCategoryStatus] = useState(false);
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: [],
      };
      const response = await addtoCategory(reqBody);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // alert("Category added");
        setAddCategoryStatus(true);
        handleClose();
        toast.success("Category added");
      } else {
        toast.error("something went wrong");
      }
    } else {
      toast.error("please enter the category name");
    }
  };

  const getAllCategory = async () => {
    const response = await getCategory();
    // console.log(response);
    setAllCategory(response.data);
  };
  console.log(allCategory);

  //function to prevent the data lose on drag
  const dragOver = (e) => {
    e.preventDefault();
  };

  //function to drop video
  const videoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);
    const videoId = e.dataTransfer.getData("videoId"); //video id is sent from the video card component
    console.log(videoId);

    //api call to get details of a pirticular video that is dragged
    const { data } = await getAVideoApi(videoId);
    console.log(data);

    //selected cattegory
    const selectedCategory = allCategory.find((item) => item.id == categoryId);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);

    //function to update category
    await updateCategory(categoryId, selectedCategory);
    getAllCategory();
  };

  useEffect(() => {
    getAllCategory();
    setAddCategoryStatus(false);
    setDeleteCategoryStatus(false);
  }, [addCategoryStatus, deleteCategoryStatus]);

  //function to delete category
  const handleDelete = async (id) => {
    await deleteCategory(id);
    setDeleteCategoryStatus(true);
  };

  return (
    <div>
      <div>
        <Button onClick={handleShow} className="w-100 mb-3" variant="warning">
          Add to category
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Add category</Form.Label>
                <Form.Control
                  onChange={(e) => setCategoryName(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {allCategory?.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="border rounded mt-2 p-2"
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, item.id)}
          >
            <div className="d-flex justify-content-between align-items-center p-3 rounded">
              <p>{item.category}</p>
              <Button onClick={() => handleDelete(item.id)} variant="danger">
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
            <Row>
              {item.allVideos.length > 0
                ? item.allVideos.map((card) => (
                    <Col className="mt-3" lg={12}>
                      <VideoCard displayVideo={card} isPresent={true} />
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger text-center fs-4 mt-5">No category added</p>
      )}
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
}

export default Category;
