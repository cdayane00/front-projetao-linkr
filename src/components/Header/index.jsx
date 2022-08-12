import React from "react";
import { Popover } from "@headlessui/react";
import { Navbar, Chevron, Search } from "./styles";
import UserToggle from "./userLogout";
import PageTitle from "./title";

export default function Header({ props, title }) {
  // const { userData, setUserData } = useContext(UserContext);
  const rotate = {
    transform: "rotate(180deg)",
    transition: "transform 300ms ease-in-out",
  };
  const urotate = {
    transition: "transform 300ms ease-in-out",
  };

  return (
    <>
      <Navbar>
        <h2>linkr</h2>
        <form>
          <input placeholder="Search for people" />
          <button type="submit">
            <Search />
          </button>
        </form>
        <div className="user">
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className="popoverButton">
                  <Chevron style={open ? rotate : urotate} />
                </Popover.Button>
                <Popover.Panel>
                  <UserToggle />
                </Popover.Panel>
              </>
            )}
          </Popover>
          <img src={props.photo} alt={props.userName} />
        </div>
      </Navbar>
      <PageTitle title={title} />
    </>
  );
}
