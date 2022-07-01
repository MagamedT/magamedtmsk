

export default function Article({ post }) {
  return (
    <div className="w-full my-4 p-4 flex flex-col border-solid border-2 border-[#9234ea] rounded-lg shadow-xl hover:shadow-[#9234ea] hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer bg-[#111111]">
        <h2 className="text-white font-bold text-xl mb-2">{post.frontMatter.title}</h2>
        <h3 className="text-gray-300 text-sm mb-2">{post.frontMatter.abstract}</h3>
        <h4 className="text-[#807e80] text-xs">{post.frontMatter.date}</h4>
    </div>
  )
}

