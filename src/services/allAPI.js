import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverUrl";

//api for uploading video
export const uploadVideoApi = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/videos`, reqBody);
};

// api to get video
export const getUploadVideoApi = async () => {
  return await commonAPI("GET", `${serverURL}/videos`, "");
};

// api to delete a pirticular video
export const deleteVideo = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {});
};

//api to add video into history
export const addToHistory = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/history`, reqBody);
};

//api to get video from history
export const getAllvideoHistory = async () => {
  return await commonAPI("GET", `${serverURL}/history`, "");
};

//api to delete watch history
export const deleteHistory = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};

//api to add category
export const addtoCategory = async (reqBody) => {
  return await commonAPI(`POST`, `${serverURL}/category`, reqBody);
};

// api ti get category
export const getCategory = async () => {
  return await commonAPI("GET", `${serverURL}/category`, "");
};

//api to delete category
export const deleteCategory = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/category/${id}`, {});
};

//api to get a single video from videos
export const getAVideoApi = async (id) => {
  return await commonAPI("GET", `${serverURL}/videos/${id}`, "");
};

//api to update all categoty object
export const updateCategory = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/category/${id}`, reqBody);
};
