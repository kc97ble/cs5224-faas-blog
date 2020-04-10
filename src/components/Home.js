import React from "react";
import { getAllArticles } from "../logic";

class Home extends React.Component {
  state = {
    errorMsg: "",
    articles: []
  }

  componentDidMount() {
    getAllArticles(({ msg, items }) => {
      this.setState({
        errorMsg: msg,
        articles: items
      })
    })
  }

  render() {
    return <pre>
      {JSON.stringify(this.state, null, 4)}
    </pre>;
  }
}

export default Home;
