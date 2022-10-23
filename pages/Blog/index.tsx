import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ArticleCard } from '../../components/article';
import { getArticlesProps } from '../../lib/api/articles';
import { Skeleton } from '@mui/material';

export const Blog: NextPage = () => {
  const [articleData, setArticleData] = useState(Array);
  useEffect(() => {
    getArticlesProps()
      .then((res) => {
        setArticleData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="main w-full lg:w-[70%]">
        <h1 className="title">Blog to Coding!</h1>

        <p className="description">Select Your Interested Blog:</p>

        <div className="w-full lg:grid grid-cols-3 text-lg text-black gap-[1rem]">
          {articleData.length === 0 ? (
            <>
              {[...Array(6)].map((e, i) => (
                <div className="max-w-[345]" key={i}>
                  <Skeleton
                    variant="rectangular"
                    className="mx-auto my-[1rem]"
                    width={210}
                    height={30}
                  />
                  <Skeleton
                    variant="rectangular"
                    className="mx-auto my-[1rem]"
                    width={210}
                    height={90}
                  />
                  <Skeleton
                    variant="rectangular"
                    className="mx-auto my-[1rem]"
                    width={210}
                    height={30}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {articleData.map((article: any, index) => (
                <ArticleCard article={article} key={index} />
              ))}
            </>
          )}
        </div>
      </main>
      <aside className="p-[5rem]">
        <div className="p-2 bg-gray-200 rounded-sm mb-4">
          <p className="mb-2 font-semibold">Popular Tags</p>
        </div>
      </aside>
    </>
  );
};

export default Blog;
