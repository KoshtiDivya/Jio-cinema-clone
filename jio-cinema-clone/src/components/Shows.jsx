import React, { useEffect, useState } from "react";
import "../styles/Shows.css";
import Show from "./Show";
const Shows = (props) => {
  return (
    <>
      <section className="shows">
        <h3>{props.title}</h3>
        <div className="shows-container">
          {
            props.movies.map((movie) => {
              return (
                <Show movie={movie} />
              )
            })
          }
         
        </div>
      </section>
    </>
  );
};

export default Shows;
