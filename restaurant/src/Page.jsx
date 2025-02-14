import img1 from "../public/curry.jpg"
import img2 from "../public/noodles.jpg"
import img3 from "../public/stew.jpg"

const Main = ()=>{
    return (
        <main className="px-16 py-6 bg-gray-100 col-span-2">
            <div className="flex justify-center lg:justify-end">
                <a href="#" className="primary btn bp hover:bg-red-400 hover:text-white">Log in</a>
                <a href="#" className="primary ml-2 btn bp hover:bg-red-400 hover:text-white">Sign up</a>
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
    )
}

export default Main