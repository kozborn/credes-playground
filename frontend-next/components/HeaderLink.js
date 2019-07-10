import React from "react";
import Link from "next/link";

const HeaderLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="block text-center mt-4 lg:inline-block lg:mt-0 lg:p-4 hover:text-gray-600 mr-4">
        {children}
      </a>
    </Link>
  );
};

export default HeaderLink;
