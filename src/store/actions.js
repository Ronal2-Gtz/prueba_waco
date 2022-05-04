import axios from "axios";
import { READ_USERS } from "./actionTypes";

export const fetchData = (searchParam = "") => async (dispatch) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${searchParam}`)
    .then((response) => {
      const data = response.data.results;

      dispatch({
        type: READ_USERS,
        payload: data
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
