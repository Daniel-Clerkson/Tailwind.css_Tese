import img1 from "../public/curry.jpg"
import img2 from "../public/noodles.jpg"
import img3 from "../public/stew.jpg"
import Navbar from "./Navbar"
import Main from "./main"

const App = ()=>{
    return (
        <div className="text-gray-600 md:grid grid-cols-3 ">
            <Navbar />
            <Main />
        </div>
    )
}

export default App