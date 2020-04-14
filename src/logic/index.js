const apiUrl =
  "https://3xnri7bq8i.execute-api.ap-southeast-1.amazonaws.com/dev";

async function getAllArticles() {
  const response = await fetch(apiUrl + "/article");
  const data = await response.json();
  return data;
}

async function getArticle(id) {
  const response = await fetch(apiUrl + "/article/" + id.toString());
  const data = await response.json();
  return data;
}

async function deleteArticle(id) {
  const response = await fetch(apiUrl + "/article/" + id.toString(), {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

async function createArticle(title, body) {
  const response = await fetch(apiUrl + "/article/", {
    method: "POST",
    body: JSON.stringify({title, body})
  });
  const data = await response.json();
  return data;
}

export { getAllArticles, getArticle, deleteArticle, createArticle };
