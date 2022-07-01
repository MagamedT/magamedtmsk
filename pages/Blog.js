import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import fs from 'fs'
import * as path  from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Article from '../components/Article'

export default function Blog( { posts }) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen">
        <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 

        </Head>
        <Header />
        <main className="mx-4 mt-12 grow">
          <h1 className="mb-10 text-white text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Blog</h1>
          {posts.map((post, index) => (
            <Link href = {'/blog/' + post.slug}  passHref  key={index}>

              <div className="my-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                 <Article post = {post}/>
              </div>

            </Link>
          ))}
        </main>
        <Footer />
    </div>
  )
}

/**<p className="text-white font-medium">● {post.frontMatter.title}, <span className="text-[#807e80] font-light">{post.frontMatter.date}</span></p>
 * 
 * hover:scale-105 transition-all duration-300
 */


export const getStaticProps = async () => {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const mdxWithMeta = fs.readFileSync(path.join('posts',filename),'utf-8')

    const { data: frontMatter} = matter(mdxWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
    
  })

  return {
    props: {
      posts
    }
  }

}