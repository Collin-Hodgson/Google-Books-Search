import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <h1>Google Books Search</h1>
      <button
        class="navbar-toggler hidden-lg-up"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Search
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
