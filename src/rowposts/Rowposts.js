import React from "react";
import axios from "../constants/axios";
import Youtube from "react-youtube";
import "./Rowposts.css";
import { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../constants/constants";
function Rowposts(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const movieHandler = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((result) => {
        if (result.data.results.length !== 0) {
          setUrlId(result.data.results[0]);
        } else {
          console.log("Array Empty! ");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((item, index) => {
          return (
            <img
              key={index}
              className={props.isSmall ? "small-poster" : "poster"}
              src={`${imageUrl + item.backdrop_path}`}
              alt="posters"
              onClick={() => movieHandler(item.id)}
            />
          );
        })}
      </div>
      {props.youtube && urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rowposts;
