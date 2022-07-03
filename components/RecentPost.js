import Card from './Cards'
import Link from 'next/link'



export default function RecentPost({posts}) {
  
  return (
    <div className="px-4 mt-20">
        <h1 className="text-white font-black text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recently publised</span></h1>

        <div className="flex flex-col items-center md:flex-row justify-center">
          
            <Card texte ={posts[0].frontMatter.title} link = {'/blog/'+ posts[0].slug}/>
        
            <Card texte ={posts[1].frontMatter.title} link = {'/blog/'+ posts[1].slug}/>
          
            <Card texte ={posts[2].frontMatter.title} link = {'/blog/'+ posts[2].slug}/>
          
        </div>

        <Link href={"/blog"}>
          <h3 className="mt-4 w-32 text-[#807e80] font-medium hover:text-white transition-all duration-200 cursor-pointer">Read all posts →</h3>
        </Link>
    </div>
  )
}









