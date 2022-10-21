import { CustomLink } from './CustomLink';
import NavLink from './NavLink';
import MenuSvg from '../../asset/svg/menu.svg';
import MenuS2vg from '@type/menu.svg';
//var MenuSvg = require("../../public/svg/menu.svg").default

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bd-navbar flex-col ">
      <div className="container-fluid">
        <CustomLink
          className="navbar-brand items-center flex justify-center"
          href="/"
          as="/"
        >
          <span className="text-2xl font-black background-black">
            Inexperienceds.com
          </span>
        </CustomLink>
        <div className="vr my-[1vh]" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-start"
          id="navbarScroll"
        >
          <hr className="d-lg-none text-white-50" />
          <ul className="flex flex-col lg:flex-row text-lg">
            <li className="nav-left-item">
              <NavLink href="/About" as="/About">
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-left-item">
              <NavLink href="/Blog" as="/Blog">
                <span>Blog</span>
              </NavLink>
            </li>
            <li className="nav-left-item">
              <NavLink href="/Support" as="/Support">
                <span>Support</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-end" id="navbarScroll">
          <hr className="d-lg-none text-white-50" />
          <ul className="navbar-nav pull-xs-right flex-wrap flex-col text-lg">
            <li className="nav-item">
              <NavLink href="/" as="/">
                <span>Sign In</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/" as="/">
                <span>Sign Up</span>
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
      <hr className="border border-white w-full" />
    </nav>
  );
};
