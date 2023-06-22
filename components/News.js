import Card from './Cards'

function News() {
  return (
    <div className="px-4 mt-20">
        <h1 className="text-white font-black text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">News</span></h1>

        <div className="flex flex-col items-center md:flex-row justify-center">
        <h3 className="text-white text-base font-medium mb-2">Internship since November 2022 with <a href = "https://sites.google.com/view/damien-garreau/home">Damien Garreau</a> (UCA, Inria)</h3>
        </div>

    
    </div>
  )
}

export default News