export const getArticlesProps = async () => {
  const BACKEND_HOST = process.env.BACKEND_HOST;
  console.log(process.env.BACKEND_HOST);
  const res = await fetch(`${BACKEND_HOST}`);
  const articles = await res.json();
  return articles;
};

export const getArticleProps = async (postId: string) => {
  const BACKEND_HOST = process.env.BACKEND_HOST;
  console.log(process.env.BACKEND_HOST);
  const res = await fetch(`${BACKEND_HOST}/${postId}`);
  const article = await res.json();
  return article;
};
