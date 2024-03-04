import axios from "axios";

export const apiUrl = "http://127.0.0.1:8000";
const token = "";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const apiForImages = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});
// GET

export const getPartners = async () => {
  return await api.get("/api/partners");
};

// POST

export const addPartner = async (item) => {
  console.log(item, "in get item");
  return await apiForImages.post("/api/partners", item);
};

export const editPartners = async (id, element) => {
  console.log(id, "testId");
  console.log(element, "testEl");
  return await apiForImages.post(`/api/partners/${id}`, element);
};
// PUT

// DELETE

export const deletePartners = async (id) => {
  return await api.delete(`/api/partners/${id}`);
};
