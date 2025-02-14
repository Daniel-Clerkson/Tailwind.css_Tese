
const Navbar = ()=>{

    const clicked = ()=>{
        document.getElementById("mobile").classList.toggle("hidden")
    }

    return (
        <div className="navbar md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold sm:font-light md:font-medium lg:font-extrabold uppercase p-1 border-b border-gray-100">
                        <a href="#" className="hover:text-gray-700">Food Ninja</a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={clicked} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>
                    </div>
                </div>
                <ul className="text-sm mt-6 hidden md:block" id="mobile">
                    <li className="py-1"><a href="#" className="text-gray-700 font-bold flex px-4 justify-end border-r-4">
                        <span>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                        </a>
                    </li>
                    <li className="py-1"><a href="#" className="flex px-4 justify-end border-r-4 border-white">
                        <span>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                        </a>
                    </li>
                    <li className="py-1"><a href="#" className="flex px-4 justify-end border-r-4 border-white">
                        <span>Contact</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 ml-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar