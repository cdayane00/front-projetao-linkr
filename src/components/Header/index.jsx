import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Navbar, Chevron } from "./styles";
import UserToggle from "./userLogout";
import PageTitle from "./title";
import SearchBar from "../SearchBar";

export default function Header({
  props,
  title,
  userPhoto,
  loading,
  dummy,
  prop,
  id,
}) {
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
        <Link to="/timeline">
          <h2>linkr</h2>
        </Link>

        <SearchBar isMobile={false} />
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
          <Link to={`/user/${props?.userId}`}>
            <img src={props?.photo || dummy} alt="user" />
          </Link>
        </div>
      </Navbar>

      <PageTitle
        title={title}
        userPhoto={userPhoto}
        loading={loading}
        prop={prop}
        id={id}
      />
    </>
  );
}
