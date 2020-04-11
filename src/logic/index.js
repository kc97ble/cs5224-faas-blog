const apiUrl =
  "https://3xnri7bq8i.execute-api.ap-southeast-1.amazonaws.com/dev";
const origin =
  "http://cs5224-lab2-part3.s3-website-ap-southeast-1.amazonaws.com/";

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


export { getAllArticles, getArticle };
