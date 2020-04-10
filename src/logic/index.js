function getAllArticles(callback) {
  console.log(callback);
  
  const result = {
    msg: "OK",
    items: [
      { id: 1, title: "First article" },
      { id: 2, title: "Second article" },
    ],
  };
  callback(result);
}

export { getAllArticles };
