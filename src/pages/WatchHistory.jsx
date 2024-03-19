import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteHistory, getAllvideoHistory } from "../services/allAPI";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WatchHistory() {
  const [history, setHistory] = useState([]);
  const [deleteHistoryStatus, setDeleteHistoryStatus] = useState(false);

  const getHistory = async () => {
    const response = await getAllvideoHistory();
    // console.log(response.data);
    setHistory(response.data);
  };
  console.log(history);

  const handleDelete = async (id) => {
    const response = await deleteHistory(id);
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setDeleteHistoryStatus(true);
      toast.success("Deteted");
    } else {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    getHistory();
    setDeleteHistoryStatus(false);
  }, [deleteHistoryStatus]);

  const notify = () => toast("something went wrong");

  return (
    <>
      <div className="container d-flex align-items-center justify-content-between mt-3">
        <h3>Watch History</h3>
        <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
          Back to home <i class="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between mx-5 p-4">
        {history?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.caption}</td>
                  <td>
                    <a target="_blank" href={data.url}>
                      {data.url}
                    </a>
                  </td>
                  <td>{data.timeStamp}</td>
                  <td>
                    <Button
                      onClick={() => handleDelete(data.id)}
                      variant="danger"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-danger fw-bold fs-4 ms-5">No watch History</p>
        )}
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default WatchHistory;
