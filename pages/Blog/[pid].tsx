import { useRouter } from 'next/router';
import Link from 'next/link';
import { getArticleProps, getArticlesProps } from '../../lib/api/articles';
import { Paper, Stack } from '@mui/material';
import { IArticle } from '../../lib/types/index';
const parse = require('html-react-parser');

const Content = ({ article }: { article: IArticle }) => {
  return (
    <Paper elevation={3} className="my-auto mx-[2rem] lg:w-[50vw] lg:mx-auto">
      <h1 className="text-lg font-black">{article.title}</h1>
      <hr />
      <h2>
        <strong>Caption:&nbsp;&nbsp;</strong>
        {article.caption}
      </h2>
      <h2>
        <strong>Author:&nbsp;&nbsp;</strong>
        {article.author}
      </h2>
      <h2>
        <strong>Publish Time:&nbsp;&nbsp;</strong>
        {article.publish_time}
      </h2>
      <h2>
        <strong>Edit Time:&nbsp;&nbsp;</strong>
        {article.edit_time}
      </h2>
      <div>
        <strong>Content:&nbsp;&nbsp;</strong>
        <br />
        {parse(article.content)}
      </div>
      <div>
        <strong>Tags:&nbsp;&nbsp;</strong>
        <ul className="tag-list flex flex-row gap-[1rem]">
          {article.tags.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center font-black my-[5rem]">
        <Link href="/Blog">Go Back</Link>
      </div>
    </Paper>
  );
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${process.env.BACKEND_HOST}/${context.params.pid}`);
  const article = await res.json();
  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BACKEND_HOST}/`);
  const articles = await res.json();

  const ids = articles.results.map((article: any) => article.id);
  const paths = ids.map((pid: number) => ({
    params: {
      pid: pid.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export default Content;
