import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Navbar, Chevron, Search } from "./styles";
import UserToggle from "./userLogout";
import PageTitle from "./title";

export default function Header({ props, title }) {
  // const { userData, setUserData } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ToastContainer />
      <Navbar>
        <h2>linkr</h2>
        <form>
          <input placeholder="Search for people" />
          <button type="submit">
            <Search />
          </button>
        </form>
        <div className="user">
          <Chevron
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <img src={props.userImage} alt={props.userName} />
        </div>
        <UserToggle toggle={toggle} />
      </Navbar>
      <PageTitle title={title} />
    </>
  );
}
