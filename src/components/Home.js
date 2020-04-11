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
    // return <pre>{JSON.stringify(this.state, null, 4)}</pre>;
    return (
      <div>
        <h1>Article list</h1>
        {this.state.articles.map(({ id, title }) => 
          <p>
            <a href={"article/"+id}>{title}</a>
          </p>
        )}
      </div>
    );
  }
}

export default Home;
