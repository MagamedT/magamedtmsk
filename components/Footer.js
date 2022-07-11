import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex flex-col mt-20 mb-0 text-[#807e80]">
      
    <div className="flex">  
        <div className="pr-36 ml-4">
          <Link href="/">
            <h3 className="menu-footer">Home</h3>
          </Link>

          <Link href="/Blog">
            <h3 className="menu-footer">Blog</h3>
          </Link>

          <Link href="/">
            <h3 className="menu-footer">News</h3>
          </Link>
                          
        </div>

        <div>
          <Link href="https://twitter.com/MagamedTm">
            <h3 className="menu-footer">Twitter</h3>
          </Link>

          <Link href="https://github.com/MagamedT">
           <h3 className="menu-footer">Github</h3>
          </Link>

          <Link href="https://www.youtube.com/channel/UC6JYyDQvN55alAZZjMRfkjw">
            <h3 className="menu-footer">Youtube</h3>
          </Link>       
        </div>
    </div>  

    <h4 className="mx-auto my-4 font-light text-xs">Made with love and Next.js by Magamed Taimeskhanov © 2021 - 2022.</h4>   
    </footer>
  )
}

export default Footer