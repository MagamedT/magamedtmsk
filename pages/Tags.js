import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import Link from 'next/link'

import fs from 'fs'
import * as path  from 'path'
import matter from 'gray-matter'

export default function Tags({ posts }) {

  const [searchTag, setSearchTag] = useState('')

  const tags = posts.map(
    post => post.frontMatter.tags
  ).flat()

  const tagsSet = Array.from(new Set(tags)) /**remove duplicate by converting array to set to array */

  const filteredPosts = posts.sort(
    (a, b) => Number(new Date(b.frontMatter.date)) - Number(new Date(a.frontMatter.date))
  ).filter(
    (post) => post.frontMatter.tags.includes(searchTag)
  )

  const postsSet = Array.from(new Set(filteredPosts))

  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen">
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={"magamed taimeskhanov personal website"} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>

      <Header />
      
      <main className="mx-4 mt-12 grow">
        <h1 className="mb-10 text-white text-4xl font-black"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tags</span> 🏷️</h1>
          <div className="flex">

          <div className="flex flex-col">

              <div className="flex mb-4">
                {tagsSet.map(
                    (tag, index) => (
                      <button onClick = {() => setSearchTag(tag)} key = {index} className="text-white m-1 p-2 flex flex-col border-solid border-2 border-[#9234ea] rounded-lg shadow-xl hover:shadow-[#9234ea] hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer bg-[#111111]">
                        {tag}  
                      </button>
                    )
                  )}
              </div>
            
              <div> 
              <span className= "text-white font-semibold text-xl">{filteredPosts.length} post(s) found ...</span>
              {filteredPosts.map((post, index) => (
                <Link href = {'/blog/' + post.slug}  passHref  key={index}>

                  <div className="my-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <Article post = {post}/>
                  </div>

                </Link>
                ))}   
              </div>

            </div>

          </div>  
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