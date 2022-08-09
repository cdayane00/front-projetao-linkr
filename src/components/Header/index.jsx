import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Navbar, Chevron } from "./styles";
import UserToggle from "./userLogout";
import PageTitle from "./title";

export default function Header() {
  // const { userData, setUserData } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <ToastContainer />
      <Navbar>
        <h3>linkr</h3>
        <input />
        <div className="user">
          <Chevron
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <img
            src="https://trello-members.s3.amazonaws.com/5e401956e0cc5673d1a06355/fead8907bb5f5497f69463bff9d0f015/50.png"
            alt="Membro bigodudo"
          />
        </div>
        <UserToggle toggle={toggle} />
      </Navbar>
      <PageTitle />
    </>
  );
}
