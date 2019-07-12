import React from "react";
import PropTypes from "prop-types";
import { getUrl } from "../lib/utils";

const Logos = ({ logos }) => (
  <div className="logos mx-auto lg:flex md:flex justify-center">
    {logos.map(logo => (
      <div className="flex-row items-center my-5" key={logo.id}>
        <a href={logo["logo-link"]} target="_blank">
          <img
            className={`${logo["logo-name"]} mx-auto md:mx-16 lg:mx-16`}
            src={`${getUrl()}${logo["logo-img"].url}`}
          />
        </a>
      </div>
    ))}
  </div>
);

Logos.propTypes = {
  logos: PropTypes.array
};

Logos.defaultProps = {
  logos: []
};

export default Logos;
