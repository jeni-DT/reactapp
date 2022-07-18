import { ActionsType } from "./ActionType";
import axios from "axios";

export const fetchProduct = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:8000/data")
      .then((res) => {
        console.log(res);
        dispatch({
          type: ActionsType.SET_PRODUCT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
export const postProduct = (data) => {
  return async (dispatch) => {
    await axios.post("http://localhost:8000/data", data).then((res) => {
      console.log("rr", res);
      dispatch({
        type: ActionsType.SELECTED_PRODUCTS,
        payload: res.data,
      }).catch((err) => {
        console.log("err", err);
      });
    });
  };
};

export const deleteproducts = (product) => {
  return async (_dispatch) => {
    await axios
      .delete(`http://localhost:8000/data/${product}`)

      .then((deleteData) => {
        console.log("id", deleteData);
      })
      .catch((err) => {
        console.log("nd", err);
      });
  };
};
