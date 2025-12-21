const navlink = [
    {
        name:"Legal Stuff",
        href:"#"
    },
    {
        name:"Privacy Policy",
        href:"#"
    },
    {
        name:"Security",
        href:"#"
    },
    {
        name:"Website Accessibility",
        href:"#"
    },
    {
        name:"Manage Cookies",
        href:"#"
    },
]

function Footer(){
    return(
        <>
        <div className="bg-cyan-700 p-3 mt-10 text-white bg-opacity-90 text-xs sm:text-sm">
        <p>Copyright &copy; 2025 BulkMail Software. All rights reserved. </p>
        <ul className="flex justify-center gap-0 sm:gap-5  p-2">
            {navlink.map((link,index)=>(
                <li key={index} className="underline hover:text-black">
                    <a href={link.href} alt="">
                            {link.name}
                        </a>
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}
export default Footer