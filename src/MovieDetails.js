import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Token } from "@mui/icons-material";
import { axiosInstance } from "./Network";
export const MovieDetails = () => {
  const params = useParams();
  const [moviedetails, setmoviedetails] = useState({});

  console.log(params);
  useEffect(() => {
    const token = "9bd4cc81edbe1996d0f3bf6c81e962f8";
    axiosInstance
      .get(
        `movie/${params.id}?`,{
          params:{
            api_key:token,
          }
        }
       
      )

      .then((res) => setmoviedetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-light  m-5">
      <img
        
        src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`}
        className="m-5 "
      />
      <h5 className="bg-light m-5"> Title: {moviedetails.title} </h5>
      <h5 className="bg-light m-5">OverView: {moviedetails.overview} </h5>
      <h6 className="bg-light m-5">
        Release date: {moviedetails.release_date}{" "}
      </h6>
      <h6 className="bg-light m-5">popularity: {moviedetails.popularity} </h6>
      <a className="bg-light m-5">Homepage: {moviedetails.homepage} </a>
      <h6 className="bg-light m-5">Budget: {moviedetails.budget} </h6>
      <h6 className="bg-light m-5">Status: {moviedetails.status} </h6>
    </div>
  );
};
