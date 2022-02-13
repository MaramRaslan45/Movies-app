import { combineReducers } from "redux";
import {addfavoritereducer} from './addfav'
import { getmoviereducer } from "./getmovie";
import {getpagereducer} from "./pagereducer"
export default combineReducers({
  ADD:addfavoritereducer,
  Get: getmoviereducer,
  page:getpagereducer
})