import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { AddFav } from "./store/actions/addfav";
import { axiosInstance } from "./Network";
import { RemFav } from "./store/actions/removefav";
import { Favicon } from "./Favicon";
import {decpage} from "./store/actions/decpage";
import { incpage } from "./store/actions/incpage";
import { GetMovie } from "./store/actions/getmovies";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Movies = (props) => {
 const movies =useSelector((state)=>state.Get)
const page=useSelector((state)=>state.page)
 console.log(page)
  const token = "9bd4cc81edbe1996d0f3bf6c81e962f8";
  useEffect(() => {
    dispatch(GetMovie())
  }, [page]);

  const search = (q) => {
   dispatch(GetMovie(q))
  };

  const dispatch = useDispatch();

  const ADD = useSelector((state) => state.ADD);

  const findInFav = (id) => {
    return ADD.findIndex((x) => x.id == id);
  };
  const handlemovie = (id) => {
    if (ADD.length > 0) {
      const movie = findInFav(id);
      if (movie === -1) {
        addmovie(id);
      } else {
        dispatch(RemFav(id));
      }
    } else {
      addmovie(id);
    }
  };


  const addmovie = (id) => {
    axiosInstance
      .get(`movie/${id}?`, {
        params: {
          api_key: token,
        },
      })
      // .then((res) => dispatch(AddFav((res.data))))

      .then((result) => {
        dispatch(AddFav(result.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
   <h1>fuhcdbchhe</h1>
      <form className="d-flex mx-auto m-5" style={{ width: 300 }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => search(e.target.value)}
        />
      
      </form>

      <button
        className="btn btn-secondary m-5 "
        onClick={() => {
          dispatch({
            type:"Dec_Page",
          })
         }}
      >
        Previous
      </button>

      <button
        className="btn btn-primary m-5 "
        onClick={() => {
         dispatch({
           type:"Inc_Page",
         })
        }}
      >
        Next
      </button>

      <div className="row container text-center mx-auto ">
        {movies.map((movie, i) => {
          return (
            <div className="col-md-4  ">
              <div className="card m-5">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                />
                <div className="card-body bg-gradient bg-dark">
                  <h6 className="card-title fw-bold text-light">
                    {" "}
                    {movie.title}
                  </h6>
                  <button className="btn btn-info bg-dark ">
                    <Link
                      to={`/MovieDetails/${movie.id}`}
                      style={{ textDecoration: "none", color: "whitesmoke" }}
                    >
                      Go to Movie
                    </Link>
                  </button>

                  {
                    <span
                      onClick={() => handlemovie(movie.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <Favicon isfav={findInFav(movie.id)}></Favicon>
                    </span>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
     

    </>
  );
};
