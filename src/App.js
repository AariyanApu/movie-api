import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=man&apikey=a2d3eef5")
      .then((res) => res.json())

  }, []);


    return (
      <ul>
        {items.map((Search) => (
          <li>{Search[2].Title}</li>
        ))}
      </ul>
    );
  }


export default App;
