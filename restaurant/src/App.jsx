import img1 from "../public/curry.jpg"
import img2 from "../public/noodles.jpg"
import img3 from "../public/stew.jpg"

const App = ()=>{
    return (
        <div className="text-gray-600">
            <div className="navbar">
                <nav>
                    <div>
                        <h1 className="font-bold uppercase p-1 border-b border-gray-100">
                            <a href="#" className="">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li><a href="#" className="text-gray-700 font-bold"><span>Home</span></a></li>
                        <li><a href="#"><span>About</span></a></li>
                        <li><a href="#"><span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>

            <main className="px-16 py-6">
                <div>
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                </div>

                <header>
                    <h2 className="text-6xl font-semibold">Receipes</h2>
                    <h3 className="font-semibold">For Customers</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recepies</h4>

                    <div className="cards mt-8">
                        <img src={img1} alt="" />
                        <div>
                            <span>Jollof Rice</span>
                            <span>Recepie by Mario</span>
                        </div>
                    </div>

                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Popular Recepies</h4>
                    
                    <div className="cards mt-8"></div>
                </div>

                <div className="btn">
                    <div>Load More</div>
                </div>
            </main>
        </div>
    )
}

export default App