import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Head from 'next/head'
import MDXComponents from '../../components/MDXComponents'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeMathjax  from 'rehype-mathjax'
import remarkMath from 'remark-math'





const components = {}
    
export default function Post ({ frontMatter, mdxSource }) {
    return (
        <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen" suppressHydrationWarning>

        <Head>
            <title>{frontMatter.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
        </Head>

        <Header />

        <main className="mx-4 mt-12 grow" suppressHydrationWarning>
            <h1 className="mb-2 text-white text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{frontMatter.title}</h1>
            <h3 className="text-white text-base font-medium mb-20">{frontMatter.date}</h3>

            <div className="prose text-gray-300" suppressHydrationWarning>
                <MDXRemote {...mdxSource} components = {MDXComponents} suppressHydrationWarning/>
            </div>
                     
        </main>
            
        <Footer />

        </div>
    )

}

/**<MDXRemote {...mdxSource} components = {components}/> */

export const getStaticPaths = async () => {

    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.split('.')[0] 
        }
    }))
    
    return {
        paths,
        fallback: false 
    }
}


export const getStaticProps = async ({params: { slug }}) => {


    const mdxWithMeta = fs.readFileSync(path.join('posts',slug+'.mdx'),'utf-8')

    const {data: frontMatter, content} = matter(mdxWithMeta)

    const mdxSource = await serialize(content, {
        
        scope: {},
       
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeMathjax],
          format: 'mdx'
        },
        
        parseFrontmatter: false
      })
    

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }


}


