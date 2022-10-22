import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
    return (
        <div>
            <main className="main">
                <h1 className="title">
                WWW to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className="description">
                Get started by editing{' '}
                <code className="code">pages/index.tsx</code>
                </p>

                <div className="grid">
                <a href="https://nextjs.org/docs" className="card">
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className="card">
                    <h2>Learn &rarr;</h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/canary/examples"
                    className="card"
                >
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className="card"
                >
                    <h2>Deploy &rarr;</h2>
                    <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </a>
                </div>
            </main>
            <aside>    
                <div className='p-2 bg-gray-200 rounded-sm mb-4'>
                <p className='mb-2 font-semibold'>Popular Tags</p>      
                </div>
            </aside>
        </div>       
    )
}

export default About