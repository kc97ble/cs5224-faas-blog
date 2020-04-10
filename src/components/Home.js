import React from "react";
import { getAllArticles } from "../logic";

class Home extends React.Component {
  state = {
    errorMessage: "",
    articles: [],
  };

  async componentDidMount() {
    const { errorMessage, articles } = await getAllArticles();
    this.setState({ errorMessage, articles });
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 4)}</pre>;
  }
}

export default Home;
