import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow-xl">
        <Link href="/">
            <Image 
            src="https://png2.cleanpng.com/sh/50a512045d0cf8149c993f3223f14bd3/L0KzQYm3VMA5N6hniZH0aYP2gLBuTfxwb5CyfZ9sb33wdcPqhb1mdJZojOR4bnnmPbP8kBlvbaR4Rddsb33wdcPqhb02aZRmUKM7MnS0cbK7Vr4xPGg6SaQ5MEG4QoS5UsA4P2E9TaoDLoDxd1==/kisspng-logo-e-commerce-electronic-business-ecommerce-5aca8122d1aa46.0475120015232207708588.png" 
            alt="Logo"
            width={90}
            height={90}
             />
        </Link>
        <div className="flex items-center space-x-2.5 text-sm">
            <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                Log in
            </button>
            <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
                Sign up
            </button>
        </div>
    </header>
  )
}

export default Header