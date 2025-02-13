import img1 from "../public/curry.jpg"
import img2 from "../public/noodles.jpg"
import img3 from "../public/stew.jpg"

const App = ()=>{
    return (
        <div className="text-gray-600 md:grid grid-cols-3 ">
            <div className="navbar col-span-1">
                <nav>
                    <div>
                        <h1 className="font-bold sm:font-light md:font-medium lg:font-extrabold uppercase p-1 border-b border-gray-100">
                            <a href="#" className="">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li><a href="#" className="text-gray-700 font-bold">
                            <span>Home</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                            </a>
                        </li>
                        <li><a href="#">
                            <span>About</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                            </a>
                        </li>
                        <li><a href="#">
                            <span>Contact</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 inline-block"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="px-16 py-6 bg-gray-100 col-span-2">
                <div className="flex justify-center lg:justify-end">
                    <a href="#" className="primary btn bp">Log in</a>
                    <a href="#" className="primary ml-2 btn bp">Sign up</a>
                </div>

                <header>
                    <h2 className="text-6xl font-semibold">Recipes</h2>
                    <h3 className="font-semibold">For Customers</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recepies</h4>

                    <div className="grid lg:grid-cols-3 gap-10">
                        <div className="cards">
                            <img src={img1} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Jollof Rice</span>
                                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                            </div>
                                <div className="badge secondary-1 secondary-2">
                                    <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                    <span>25 mins</span>
                                </div>
                        </div>
                        <div className="cards">
                            <img src={img2} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Noodles</span>
                                <span className="block text-gray-500 text-sm">Recipe by Duke</span>
                            </div>
                                <div className="badge secondary-1 secondary-2">
                                <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <span>25 mins</span>
                                </div>
                        </div>
                        <div className="cards">
                            <img src={img3} alt="" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Beans</span>
                                <span className="block text-gray-500 text-sm">Recipe by Jude</span>
                            </div>
                                <div className="badge secondary-1 secondary-2">
                                <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <span>25 mins</span>
                                </div>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Popular Recepies</h4>
                    
                    <div className="cards mt-8"></div>
                </div>

                <div className="btn flex justify-center">
                    <div className="secondary-1 secondary-2 btn">Load More</div>
                </div>
            </main>
        </div>
    )
}

export default App