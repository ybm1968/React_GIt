import axios from "axios";

export const boardList = () => axios.get("/boards")
export const boardInsert = () => axios.post("/boards/", {title, wirter, content})