import React, { useState, useEffect } from "react";
import CarouselComponent from "../components/CarouselComponent";
import Channels from "../components/Channels";
import Navbar from "../components/Navbar";
import Tags from "../components/Tags";
import Feature from "../components/Feature";
import Shows from "../components/Shows";
import Footer from "../components/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]); //stores all the movies
  const [featuredMovie, setFeaturedMovie] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [englishMovies, setEnglishMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);

  const [highMovies, setHighMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      let res = await fetch("http://localhost:3000/movies");
      let response = await res.json();
      // console.log(response[1].imageUrl);

      setMovies(response);
      //filtering the movies based on the featured
      let featuresMovie = response.filter((movie) => {
        return movie.featured === true;
      });
      setFeaturedMovie(featuresMovie.slice(0, 4));

      //filtering the movie based on rate
      let highMovie = response.filter((movie) => {
        return movie.imdb > 8.5;
      });
      setHighMovies(highMovie.slice(0, 6));

      //filtering the movies based on the language
      let hindiMovi = response.filter((movie) => {
        return movie.language === "Hindi";
      });
      setHindiMovies(hindiMovi.slice(0, 6));

      let englishMovi = response.filter((movie) => {
        return movie.language === "English";
      });
      setEnglishMovies(englishMovi.slice(0, 6));

      //filtering the movies based on the genre
      let actionMovi = response.filter((movie) => {
        return movie.genre.includes("Action");
      });
      setActionMovies(actionMovi.slice(0, 6));


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      
      <Navbar movies={movies} />
      {/* <Tags /> */}
  
      <CarouselComponent />
      <Tags /> 
      <Channels />
      <Feature featuredMovie={featuredMovie} />
      <Shows movies={hindiMovies} title="Hindi Movies" />
      <Shows movies={highMovies} title="Highly Rated Movies" />
      <Shows title="Action Movies 🎬" movies={actionMovies} />
      <Shows title="English Movies" movies={englishMovies} />
      <Footer />
    </>
  );
};

export default Home;
