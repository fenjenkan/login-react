import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <div className="p-4">
            <img src="img/logo_blanco.png" alt="logo" width={200} />
          </div>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div></div>
            <div className="text-center">
              <p className="fs-6 text-secondary ">Envios a todo México</p>
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle fs-4 text-light px-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Obras
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle  fs-4 text-light px-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Artistas
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <form class="d-flex pt-4 pe-4">
              <img className="p-2" src="img/lupita.png" alt="" />
              <img className="p-2" src="img/user.png" alt="" />
              <img className="p-2" src="img/heard.png" alt="" />
              <span class='badge badge-warning' id='lblCartCount'> 5 </span>
              <img className="p-2" src="img/car.png" alt="" />
              <span class='badge badge-warning' id='lblCartCount1'> 5 </span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
