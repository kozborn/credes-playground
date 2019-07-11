import React from "react";
import Header from "../components/Header";
import Logos from "../components/Logos";

class Layout extends React.Component {
  render() {
    return (
      <div className="bg-gray-400">
        <Header />
        <div>{this.props.children}</div>
        <Logos />
      </div>
    );
  }
}

export default Layout;
