import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Navbar, Chevron, Search } from "./styles";
import UserToggle from "./userLogout";
import PageTitle from "./title";

export default function Header({ props, title }) {
  const rotate = {
    transform: "rotate(180deg)",
    transition: "transform 500ms ease-in-out",
  };
  const urotate = {
    transition: "transform 300ms ease-in-out",
  };

  return (
    <>
      <Navbar>
        <Link to="/timeline">
          <h2>linkr</h2>
        </Link>
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

          <img src={props.photo} alt="user" />
        </div>
      </Navbar>
      <PageTitle title={title} />
    </>
  );
}
