// // actions.js
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

import axios from 'axios';
import Cookies from 'universal-cookie';
export const GET_DATAS = "GET_DATAS";
export const SET_DATA = "SET_DATA";
export const SET_LOGIN = "SET_LOGIN";
export const SET_REGISTER = "SET_REGISTER";
export const GET_BY_DATA = "GET_BY_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const DELETE_DATAS = "DELETE_DATAS";

export const getTrans = () => {
  return (dispatch) => {
      // get data from API
    //   const cookies = new Cookies()
    //   const token = cookies.get("token")
      // console.log(token);
      axios.get('https://be-tiketku-production.up.railway.app/api/v1/tiket', {
          headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NTYzMDg4fQ.zCE_OynwEoymILiP9N9OrGdCbPRZjxejG1h1lH1_qUU`
          }
      })
          .then(function (response) {
              console.log(response.data.data)
              dispatch({
                  type: GET_DATAS,
                  // action.payload.data = hasil response data dari API
                  payload: {
                      data: response.data
                  }
              })
          })
          .catch(function (error) {
              console.log(error.message)
              dispatch({
                  type: GET_DATAS,
                  payload: {
                      data: []
                  }
              })
          })
  }
}
