
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecentPost from '../components/RecentPost'
import Footer from '../components/Footer'
import Information from '../components/Information'
import RecentProject from '../components/RecentProject'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'



const Home = ({ posts }) => {
  
  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={"magamed taimeskhanov personal website"} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>

      <Header />
      
      <main className="grow">

          <Hero />
          <RecentPost posts = {posts}/>
          <RecentProject />
          
      </main>

      <Footer />
    </div>
  )
}


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


export default Home