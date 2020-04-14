import React from "react";
import { getAllArticles, createArticle, deleteArticle } from "../logic";
import { book_list } from './util';

class Manage extends React.Component {
  state = {
    errorMessage: "",
    articles: [],
  };

  async componentDidMount() {
    const { errorMessage, articles } = await getAllArticles();
    this.setState({ errorMessage, articles });
  }

  createArticle = async () => {
    const index = Math.floor(Math.random() * book_list.length)
    const { title, body } = book_list[index];
    await createArticle(title, body);
    window.location.reload(false);
  }

  deleteArticle = async (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    await deleteArticle(index);
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <h1>Manage articles</h1>
        <p>
          <button onClick={this.createArticle}>Create a new article</button>
        </p>
        <ul>
          {this.state.articles.map(({ id, title }) => (
            <li>
              <a href={"article/" + id}>{title}</a>
              <button data-index={id} onClick={this.deleteArticle}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Manage;
