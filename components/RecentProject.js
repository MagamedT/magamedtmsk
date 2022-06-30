import Card from './Cards'

function RecentProject() {
  return (
    <div className="px-4 mt-20">
        <h1 className="text-white font-black text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recent Projects</h1>

        <div className="flex flex-row justify-center">
            <Card  texte ={"3D Fractal Visualization"} link = "/"/>
            <Card  texte ={"Emotion Recognition"} link = "/"/>
            <Card  texte ={"NFT Minting"} link = "/"/>
        </div>

        <h3 className="mt-4 w-30 text-[#807e80] font-medium hover:text-white transition-all duration-200 cursor-pointer">See all projects →</h3>
    </div>
  )
}

export default RecentProject