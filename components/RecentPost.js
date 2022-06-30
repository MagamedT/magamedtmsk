import Cards from './Cards'

function RecentPost() {
  return (
    <div className="px-4 mt-20">
        <h1 className="text-white font-black text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recently publised</h1>

        <div className="flex flex-row justify-center">
            <Cards texte ={"Why using more flashy data visualisation for business"}/>
            <Cards texte ={"An introduction to Measured Probabilty Theory"}/>
            <Cards texte ={"Crypto and Data"}/>
        </div>

        <h3 className="mt-4 w-32 text-[#807e80] font-medium hover:text-white transition-all duration-200 cursor-pointer">Read all posts →</h3>
    </div>
  )
}

export default RecentPost