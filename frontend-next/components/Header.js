import classNames from "classnames";
import HeaderLink from "./HeaderLink";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const menuNode = useRef();
  const [visible, toggleMenu] = useState(false);

  const handleClick = e => {
    if (menuNode.current.contains(e.target)) {
      if (
        e.target.closest("button") &&
        !e.target.closest("button").classList.contains("custom-class")
      )
        // at the moment I still want menu to close after click
        toggleMenu(false);
      return;
    }
    // outside click
    toggleMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const menuClassNames = classNames(
    "header-menu flex-grow-0 lg:flex lg:items-center py-4",
    {
      block: visible,
      shadow: visible,
      hidden: !visible
    }
  );

  return (
    <nav
      className="block lg:flex flex-grow-0 lg:justify-center lg:items-center bg-white mb-6 lg:shadow"
      ref={menuNode}
    >
      <div className="flex lg:hidden flex-row-reverse p-6">
        <button
          className="custom-class flex items-center px-3 py-2 border outline-none active:outline-none focus:outline-none rounded border-teal-400 hover:text-teal-400 hover:border-gray-600"
          onClick={() => toggleMenu(visible ? false : true)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={menuClassNames}>
        <div className="text-sm lg:flex-grow">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="program">Program</HeaderLink>
          <HeaderLink href="events">Events</HeaderLink>
          <HeaderLink href="bulletin-board">Bulletin Board</HeaderLink>
          <HeaderLink href="membership">Membership</HeaderLink>
          <HeaderLink href="resources">Resources</HeaderLink>
          <HeaderLink href="about">About</HeaderLink>
          <HeaderLink href="contact">Contact</HeaderLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
