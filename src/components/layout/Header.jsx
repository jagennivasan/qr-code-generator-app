import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [isOpen, setItOpen] = useState(false);

  const iconOpen = () => {
    setItOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed bg-light ">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 me-auto fs-3 mx-5">
          Logo
        </Link>
        <button
          onClick={iconOpen}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle-navigation"
        >
          {isOpen ? (
            <IoMdClose size={30} />
          ) : (
            <IoReorderThreeOutline size={30} />
          )}
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                QR codes
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="" className="nav-link">
                Pricing
              </Link>
            </li>

            <li className="nav-item active mx-y ">
              <Link
                to="/login"
                className="bg-warning px-2 py-1  text-light nav-link mx-2 d-sm-none text-center"
              >
                Log in
              </Link>
            </li>
            <li className="nav-item active my-2">
              <Link
                to="/signup"
                className="bg-primary px-2 py-1 text-light nav-link mx-2 d-sm-none text-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className=" d-none d-sm-inline-flex d-lg-inline-flex align-items-center">
          <Link
            to="/login"
            className="bg-warning px-2 py-1  text-light nav-link mx-2 animate-up-2"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className=" bg-primary px-2 py-1 text-light nav-link mx-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
