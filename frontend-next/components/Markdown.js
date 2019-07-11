import marked from "marked";
import React from "react";
import PropTypes from "prop-types";
import { getUrl } from "../lib/utils";

const Markdown = ({ content }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: marked(content || "", {
        baseUrl: getUrl()
      })
    }}
  />
);

Markdown.propTypes = {
  content: PropTypes.string
};

Markdown.defaultProps = {
  content: ""
};

export default Markdown;
