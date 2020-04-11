import React from "react";
import { getArticle } from "../logic";

class Article extends React.Component {
  state = {
    errorMsg: "",
    title: "",
    body: "",
  };

  async componentDidMount() {
    const id = this.props.match.params["id"];
    const { errorMessage, title, body } = await getArticle(id);
    this.setState({ errorMessage, title, body });
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.body}</p>
    </div>
  }
}

export default Article;
