import Link from 'next/link'

function Header() {
  return (
    <div className="flex justify-between  items-center text-[#807e80] font-medium mt-12">
        <div>
            <ul className="flex items-center">
                <Link href = "/"><li className="menu-item">Home</li></Link>
                <Link href = "/Blog"><li className="menu-item">Blog</li></Link>
                <Link href = "/Contact"><li className="menu-item">Contact</li></Link>
            </ul>
        </div>

        <div className="px-4 py-1 hover:bg-[#222222] hover:rounded-lg transition-all duration-200 cursor-pointer">
            News
        </div>


    </div>
  )
}

export default Header