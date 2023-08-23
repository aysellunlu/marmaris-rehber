import React from "react";
import "../Styles/MainPage.css";

const MainPage = () => {
  return (
    <div className=" main-content">
      <div className="main-bg-img">
        <input
          type="text"
          class="input-field"
          placeholder="What do you want to search ?"
        />
        <button className="search-btn">ARA</button>
      </div>
      <div className="marmaris-center-container container-fluid">
        <div className="marmaris-center-header p-3 mt-4">
          Welcome to Marmaris !
        </div>
        <div className="main-page-text container-fluid">
          Marmaris is the pearl of Turkey. You are so lucky to be here right
          now. Enjoy your vacation. I can guide you if you choose what you want
          to do.{" "}
        </div>
        <div className="select-container col-lg-8 col-sm-12 mt-4 row container">
          <select class="form-select col-lg col-sm-12 mx-2" aria-label="Default select example">
            <option selected>Please select</option>
            <option value="1">Restaurants & Cafes</option>
            <option value="2">Coffee Shops</option>
            <option value="3">Shopping Center</option>
            <option value="4">Beaches</option>
            <option value="5">Water Parks</option>
            <option value="6">Bars</option>
            <option value="7">Night Clubs</option>
            <option value="8">Adventure Parks</option>
            <option value="9">Nature Parks</option>
            <option value="10">Boat Trips</option>
            <option value="10">Others...</option>
          </select>
          <button className="list-btn mt-2 py-2 col-lg-3 col-sm-12 mx-2">
            List
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;
