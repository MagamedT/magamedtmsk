


function Hero() {
  return (
    <div className="flex justify-between items-center mx-4 mt-12">
        <div>
            <h1 className="text-white text-4xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Magamed Taimeskhanov</h1>
            <h3 className="text-white text-base font-medium mb-2">Student at Master MPA Valrose-Nice</h3>
            <p className="text-[#807e80] text-base w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue iaculis semper. Aenean non quam luctus, venenatis nibh hendrerit, bibendum nisl. Nulla sit amet sem velit.</p>
        </div>
        

    
        <img className = "invisible rounded-full  w-1/5 h-1/5 md:visible" src="profil.jpg" />
    
        

    </div>
    
  )
}

export default Hero