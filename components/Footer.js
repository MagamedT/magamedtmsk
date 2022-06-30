import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex mt-20 mb-0 text-[#807e80]">
      
        
        <div className="pr-36 ml-4">
          <Link href="/">
            <h3 className="menu-footer">Home</h3>
          </Link>

          <Link href="/">
            <h3 className="menu-footer">About</h3>
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

        
    </footer>
  )
}

export default Footer