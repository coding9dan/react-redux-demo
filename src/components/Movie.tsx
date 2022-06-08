import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface Movie {
  title: string;
  rating: number;
}

const MovieAxios: React.FC<{}> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get<Movie[]>(
        "https://coding9dan.github.io/api/movies.json"
      );
      setMovies(response.data.movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="info-fetch">
        <h2>Info with Fetching</h2>
        {movies.length > 0 && (
          <ul>
            {movies.map((item, idx) => (
              <li
                key={item.title + idx}
                className={item.rating < 60 ? "pretty-bad" : ""}
              >
                {item.title} - {item.rating}
              </li>
            ))}
          </ul>
        )}
        {!movies.length && <p>No movies!</p>}
      </div>
    </>
  );
};

const MovieJson = () => {
  const movieData = {
    success: true,
    data: [
      {
        title: "Some Movie",
        rating: 65,
      },
      {
        title: "Another Movie",
        rating: 48,
      },
      {
        title: "Good Movie",
        rating: 80,
      },
    ],
  };

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(movieData.data);
  }, []);

  return (
    <>
      <div className="info-json">
        <h2>Info from local data</h2>
        {movies.length > 0 && (
          <ul>
            {movies.map((item, idx) => (
              <li
                key={item.title + idx}
                className={item.rating > 60 ? "pretty-good" : ""}
              >
                {item.title} - {item.rating}
              </li>
            ))}
          </ul>
        )}
        {!movies.length && <p>No movies!</p>}
      </div>
    </>
  );
};

export { MovieAxios, MovieJson };
