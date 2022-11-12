import Card from './Cards'

function RecentProject() {
  return (
    <div className="px-4 mt-20">
        <h1 className="text-white font-black text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recent Projects</span></h1>

        <div className="flex flex-col items-center md:flex-row justify-center">
            {/* <Card  texte ={"Neural net repository"} link = "/"/> */}
            <Card  texte ={"..."} link = "/"/>
            <Card  texte ={"C++ Fractal Ray marching (code refactoring for github)"} link = "/"/>
            <Card  texte ={"..."} link = "/"/>
        </div>

        <h3 className="mt-4 w-30 text-[#807e80] font-medium hover:text-white transition-all duration-200 cursor-pointer">See all projects →</h3>
    </div>
  )
}

export default RecentProject