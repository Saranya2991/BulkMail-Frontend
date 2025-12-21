import logo from "../assets/mail.jpeg"
function Header(){
    return(
        <>
        <div className="flex justify-between bg-cyan-50 mt-3">
            <div className="w-96 p-4 my-12 lg:ml-16 sm:ml-0 md:ml-2">
                <h1 className="text-lg md:text-3xl sm:text-2xl font-bold">Bulk Email Software</h1>
                <p className="text-xs md:text-xl sm:text-lg text-start mt-3 ml-6">If you have a business that requires contacting large numbers of clients and customers or other contacts, a bulk email software will save you lots of time!</p>
                <button className="bg-cyan-800 text-white px-4 m-4 py-1 text-lg font-semibold rounded mt-6 hover:bg-cyan-300 hover:text-black">Get Started</button>
            </div>
            <img className="w-1/2" src={logo}></img>
        </div>
        </>
    )
}
export default Header