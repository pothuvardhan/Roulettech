import * as types from "./actionTypes";
import axios from "axios";

// utils
import { toast } from "react-toastify";




export const institution_login = (data, callback) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
    };
    axios
      .post(`http://3.14.127.142:8000/login/`, JSON.stringify(data), {
        headers,
      })
      .then((resp) => {
        console.log("resp",resp)

        if (!resp?.status) {
          toast.error(resp?.data?.message);
        }
        else {
          toast.success("Logged in");
          localStorage.setItem("user_data", JSON.stringify(resp?.data));
          dispatch({
            type: types.LOGIN,
            payload: resp?.data,
          });

          sessionStorage.setItem("user_data", JSON.stringify(resp?.data?.message))
          callback(resp?.data?.message);
        }

      })
      .catch((error) => {

        toast.error(
          error ?? "Something went wrong",
          {
            autoClose: 2000,
          }
        );
      });
  };
};



const getInstituteData = (data) => ({
  type: types.INSTITUTE_LIST,
  payload: data,
});

export const registerInstitute = (data) => {
  return function (dispatch) {
    var headers = {
      "Content-type": "application/json",
    };

    axios.post(`http://3.14.127.142:8000/register_student/`, data, { headers })
      .then((resp) => {
        dispatch(getInstituteData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};



