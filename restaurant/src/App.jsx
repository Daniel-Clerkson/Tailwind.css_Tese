const App = ()=>{
    return (
        <div>
            <div className="navbar">
                <nav>
                    <div>
                        <h1>
                            <a href="#">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li><a href="#"><span>Home</span></a></li>
                        <li><a href="#"><span>About</span></a></li>
                        <li><a href="#"><span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>

            <main>
                <div>
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                </div>

                <header>
                    <h2>Receipes</h2>
                    <h3>For Customers</h3>
                </header>
            </main>
        </div>
    )
}

export default App