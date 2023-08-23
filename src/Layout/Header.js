import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header-bg container-fluid ">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="header-text" href="/">
            {" "}
            Marmaris Guide
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="header-text-secondary px-4"
                  aria-current="page"
                  href="/"
                >
                  Marmaris'te Neler Yapılır ?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
