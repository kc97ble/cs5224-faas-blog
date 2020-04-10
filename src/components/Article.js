import React from 'react';

class Article extends React.Component {
  state = {
    errorMsg: "",
    title: "",
    body: ""
  }

  render() {
    return <pre>
      {JSON.stringify(this.state, null, 4)}
      {JSON.stringify(this.props, null, 4)}
    </pre>;
  }
}

export default Article;
