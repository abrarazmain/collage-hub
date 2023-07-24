import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    console.log(searchQuery);
    try {
      const response = await fetch(`/searchCollages/${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching collages:", error);
    }
    setSearchQuery('')
  };
console.log(searchResults);
  let navItems = (
    <>
      <li>
        <NavLink to="/collages">Collages</NavLink>
      </li>
      <li>
        <NavLink to="/admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/myCollage">My Collage</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          ></ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CollageHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="form-control relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
        <button  className="absolute top-4 right-2" onClick={handleSearch}><FaSearch></FaSearch></button>
       
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn ml-3">LOGIN</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
