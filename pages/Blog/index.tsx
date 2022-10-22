import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getArticleProps } from '../../lib/api/articles';
import Box from '@mui/material/Box';

export const Blog: NextPage = () => {
  const [articleData, setArticleData] = useState(Array);
  useEffect(() => {
    getArticleProps().then((res) => {
      setArticleData(res);
    });
  }, []);
  console.log(articleData);
  console.log(typeof articleData);
  return (
    <>
      <main className="main w-full">
        <h1 className="title">
          Blog to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.tsx</code>
        </p>

        <Box className="w-full text-lg text-black ">
          {articleData &&
            articleData.map((article: any, index) => (
              <div className="card mx-auto my-[1rem]" key={index}>
                <h3 className="font-black">{article.title}</h3>
                <hr className="my-[1rem]" />
                <p>{article.body}</p>
              </div>
            ))}
        </Box>
      </main>
      <aside>
        <div className="p-2 bg-gray-200 rounded-sm mb-4">
          <p className="mb-2 font-semibold">Popular Tags</p>
        </div>
      </aside>
    </>
  );
};

export default Blog;
