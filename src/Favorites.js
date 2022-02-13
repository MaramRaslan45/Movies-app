import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddFav } from "./store/actions/addfav";
import { Link } from "react-router-dom";
import store from "./store/index";
const Favorites = () => {
  const movie =useSelector((state)=>state.ADD)


 
   


  return (
   
    <div className="row container text-center mx-auto " >
    {movie.map((m, i) => {
      return (
        <div className="col-md-4  ">
          <div className="card m-5">
            <img
              src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              className="card-img-top"
            />
            <div className="card-body bg-gradient bg-dark">
              <h6 className="card-title fw-bold text-light">
                {" "}
                {m.title}
              </h6>
              <button className="btn btn-info bg-dark ">
                <Link
                  to={`/MovieDetails/${m.id}`}
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  Go to Movie
                </Link>
              </button>

            
            </div>
          </div>
        </div>
      );
    })}
  </div>
  );
};

export default Favorites;
