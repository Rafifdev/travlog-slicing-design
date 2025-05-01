function App() {
  return (
    <div className="px-32 m-auto">

      {/* Navbar ✅*/}
      <nav className="flex items-center justify-between flex-row py-8 cursor-pointer">
        <div>
          <img src="/image/logo.svg" alt="logo" className="h-11" />
        </div>
        <div>
          <ul className="flex flex-row gap-16 text-md font-figtre text-gray-400">
            <li className="duration-200 ease-in-out hover:text-black">Home</li>
            <li className="duration-200 ease-in-out hover:text-black">
              Discover
            </li>
            <li className="duration-200 ease-in-out hover:text-black">
              Special Deals
            </li>
            <li className="duration-200 ease-in-out hover:text-black">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <div className="font-figtre">
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-md hover:bg-primary hover:text-white duration-200 ease-in-out">
                <a href="#">Log In</a>
              </button>
            </div>
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-md hover:bg-primary-hover duration-200 ease-in-out">
                <a href="#">Sing Up</a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="py-8 justify-center items-center flex-row">
        {/* left */}
        <div>
          <div className="flex flex-row gap-4">
            <h1 className="text-secondary">Explore the world!</h1>
            <img src="/image/bag.svg" alt="bag" />
          </div>
          <div>
            <h1>Travel <span className="text-secondary">top destination</span> of the world</h1>
          </div>
          <div>
            <p className="text-gray-400">
              We always make our customer happy by providing as many choices as
              possible
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-md hover:bg-primary-hover duration-200 ease-in-out">
                <a href="#">Get Started</a>
              </button>
            </div>
            <div>
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-md">
                <div className="flex flex-row gap-2">
                <img src="/image/play.svg" alt="play"/>
                <a href="#">Log In</a>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div></div>
      </div>
    </div>
  );
}

export default App;
