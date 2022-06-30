import Link from 'next/link'

function Card({texte , link}) {
    return (
      <Link href = {link}>
      <div className="flex flex-col m-4 scale-100 items-center justify-center border-solid border-2 border-[#9234ea] text-black h-40 w-40  rounded-lg shadow-xl hover:shadow-[#9234ea] hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer">
          
        <p className="text-2xs text-center text-white p-4 font-medium italic">{texte}</p> 
          
      </div>
      </Link>
    )
  }
  
  export default Card

  //<img className="w-full rounded rounded-b-none" src={image} />  
