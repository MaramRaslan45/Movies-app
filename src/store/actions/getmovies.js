import { accordionActionsClasses } from "@mui/material";
import { useSelector } from "react-redux";
import { combineReducers } from "redux";
 import store from "..";
import { axiosInstance } from "../../Network"
import reducers from "../reducers";
import { getpagereducer } from "../reducers/pagereducer";
import { incpage } from "./incpage";


export const GetMovie = (a)=> async (dispatch)=>{
   const page=store.getState().page
    return axiosInstance
    .get(`movie/popular?&query${a}`, {
      params: {
        api_key: '9bd4cc81edbe1996d0f3bf6c81e962f8',
         page:page
      },
    })
    .then((res) => dispatch({
        type:"Get_Movie",
        payload:res.data.results,
    })
    )
    .catch((err) => console.log(err))
}
  