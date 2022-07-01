


function Hero() {
  return (
    <div className="flex justify-between items-center mx-4 mt-12">
        <div>
            <h1 className="text-white text-4xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Magamed Taimeskhanov</h1>
            <h3 className="text-white text-base font-medium mb-2">Student at Master MPA Valrose-Nice</h3>
            <p className="text-[#807e80] text-base w-80">I&apos;m a 1st year Master student in mathematics at Université Côte d&apos;Azur. Mathematics, AI and tech are my main center of interest, have some skill in programming (C++, python, javascript) and web dev.</p>
        </div>
        

    
        <img className = "invisible rounded-full  w-1/5 h-1/5 md:visible" src="profil.jpg" />
    
        

    </div>
    
  )
}

export default Hero