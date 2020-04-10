const apiUrl = "https://3xnri7bq8i.execute-api.ap-southeast-1.amazonaws.com/dev"

async function getAllArticles() {
  const response = await fetch(apiUrl+"/article");
  const data = await response.json();
  console.log(data);
  return data;
}

export { getAllArticles };
