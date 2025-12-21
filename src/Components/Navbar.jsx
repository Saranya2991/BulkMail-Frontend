import { useState } from "react";
const navlink = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "About",
        href: "#"
    },
    {
        name: "Contact",
        href: "#"
    },
]


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav className="flex justify-between bg-cyan-900 p-3 text-white sticky top-0 z-10">
            
            <h1 className="text-3xl font-bold">BulkMail</h1>
            
            <ul className="hidden lg:flex gap-5">
                {navlink.map((link, index) => (
                    <li key={index} className="hover:text-black">
                        <a href={link.href}>
                            {link.name}
                        </a>
                    </li>
                ))} 
            </ul>
            <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          )}
        </button>
        
      
            {isOpen && (
        <ul className="absolute left-0 top-full w-full bg-cyan-800 lg:hidden flex flex-col gap-3 px-5 py-4 shadow-lg">
          {navlink.map((link, index) => (
            <li key={index} className="hover:text-black">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}    
        </nav>
        </>
    )
}
export default Navbar