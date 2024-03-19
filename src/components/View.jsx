import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getUploadVideoApi} from "../services/allAPI";
import { faL, fas } from "@fortawesome/free-solid-svg-icons";

function View({ uploadVideoStatus }) {
  const [video, setVideo] = useState([]);
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getVideos = async () => {
    const response = await getUploadVideoApi();
    console.log(response);
    const { data } = response;
    console.log(data);
    setVideo(data);
  };

  console.log(video);

  useEffect(()=>{
    getVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])

  return (
    <>
      <Row className="w-100">
        {video?.length > 0 ?
          video?.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard  displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />
            </Col>
          ))
         : (
          <p className="text-warning fs-3">No videos</p>
        )}
      </Row>
    </>
  );
}

export default View;
