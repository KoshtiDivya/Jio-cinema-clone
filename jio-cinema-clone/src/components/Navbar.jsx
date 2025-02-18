import React, { useEffect, useState } from "react";
import logo from "../images/jio-cinema-logo.png";
import "../styles/navbar.css";
import crown from "../images/crown.svg";
import { NavLink } from "react-router-dom";
import Show from "./Show";
const Navbar = (props) => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    // console.log(searchTitle); //for check

    if (searchTitle !== "") {
      let filterMovies = props.movies.filter((movie) => {
        return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0;
      });

      setFilteredMovies(filterMovies);
    } else {
      setFilteredMovies([])
    }
  }, [searchTitle]);
  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <p className="logo-text">JioCinema</p>
            <div className="premium">
              <img src={crown} alt="crown" />
              <p>Go Premium</p>
            </div>
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              {navLinks.map((link) => {
                return <NavLink  className="nav-item">{link}</NavLink>;
              })}
            </ul>
          </div>
        </div>

        <div className="right-side">
          <div className = "search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className="search-box">
            <div className="headerIcon">
              {/* {" "} */}
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
              className="search-input"
              placeholder="Movies, Shows and more"
            />
            <div className="headerIcon">
              <i className="fa-solid fa-microphone"></i>
            </div>
          </div>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
     
      
      {
        searchTitle.length !== 0 ? <div className="seach-result">
        {
          filteredMovies.map((movie) => {
          return <Show movie={movie} />
          })
        }
      </div>: null
      }
      
    </>
  );
};

export default Navbar;
