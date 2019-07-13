import marked from "marked";
import React from "react";
import PropTypes from "prop-types";
import { getClientBackendUrl } from "../lib/utils";

const Markdown = ({ content }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: marked(content || "", {
        baseUrl: getClientBackendUrl()
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
