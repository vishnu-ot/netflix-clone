import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../constants/constants";
import "./Banner.css";
import axios from "../constants/axios";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        let x = Math.floor((Math.random() * 10) + 1);
        console.log(x);
        console.log(response.data.results[0]);
        setMovie(response.data.results[x]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imageUrl + movie?.backdrop_path})` }}
    >
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
