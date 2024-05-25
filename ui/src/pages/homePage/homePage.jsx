import React, { useContext } from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext.jsx";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real State & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, voluptate praesentium! Tempora distinctio eligendi harum
            fugit eaque laboriosam error adipisci ipsum. Praesentium quidem
            tempore corrupti repellendus ea minus accusamus nihil.
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>300</h1>
              <h2>Propery Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
