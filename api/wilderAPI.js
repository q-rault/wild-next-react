import axios from "axios";
import apiRequests from "../config/apiRequests.config";

export const deleteWilder = async (id) => {
  try {
    await axios.delete(`${apiRequests.wilderDeleteString}${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const updateWilder = async (id, wilder) => {
  try {
    await axios.put(`${apiRequests.wilderUpdateString}${id}`, wilder);
  } catch (err) {
    console.log(err);
  }
};
