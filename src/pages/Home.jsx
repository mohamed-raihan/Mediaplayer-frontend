import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Category from "../components/Category";
import { Button } from "react-bootstrap";

function Home() {
  // create state to do state lifting
  const [uploadVideoStatus, setuploadVideoStatus] = useState({});
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between aling-items-center">
        <div className="add-video">
          <Add setuploadVideoStatus={setuploadVideoStatus} />
        </div>
        <div className="d-flex flex-column">
          <Link
            to={"/watch-history"}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Watch History
          </Link>
        </div>
      </div>
      <div className="container-fluid row w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className="all-video col-lg-9">
          <h4 className="mc-5">All Video</h4>
          <View uploadVideoStatus={uploadVideoStatus} />
        </div>
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
