import React from "react";
import PropTypes from "prop-types";
import Markdown from "./Markdown";

const Section = ({ title, content, children }) => {
  return (
    <div className="container">
      <h1 className="text-4xl max-w-4xl mx-auto my-10 font-bold text-center">
        {title}
      </h1>
      <div className="container px-10 max-w-6xl mx-auto">
        <Markdown content={content || ""} />
      </div>
      <div className="container px-10 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

Section.propTypes = {};

export default Section;
