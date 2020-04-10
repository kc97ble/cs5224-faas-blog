import React from "react";

class Manage extends React.Component {
  state = {
    errorMsg: "",
    articles: [],
  };

  render() {
    return (
      <pre>
        {JSON.stringify(this.state, null, 4)}
        {JSON.stringify(this.props, null, 4)}
      </pre>
    );
  }
}

export default Manage;
