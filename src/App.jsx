import Navbar from "./Navbar"
import Main from "./Page"

const App = ()=>{
    return (
        <div className="text-gray-600 md:grid grid-cols-3 ">
            <Navbar />
            <Main />
        </div>
    )
}

export default App