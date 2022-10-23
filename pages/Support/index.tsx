import type { NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage = () => {
  return (
    <div className="flex justify-center item-center ">
      <main className="main flex flex-col justify-center item-center ">
        <h1 className="title">Support Us!</h1>

        <div className="flex item-center justify-center h-full mt-[10rem]">
          <a
            href="https://www.buymeacoffee.com/jacksonwun"
            className="card p-[1rem] bg-gray-300"
          >
            <h2>Buy Me A Coffee</h2>
            <div className="flex flex-row justify-evenly">
              <p>Thank You!!!</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-return-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Blog;
