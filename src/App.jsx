function App() {
  return (
    <div className="pt-24 px-32 m-auto max-w-[1500px]">
      {/* Navbar ✅*/}
      <nav className="flex items-center justify-between flex-row py-6 cursor-pointer fixed top-0 left-0 px-32 m-auto w-full z-10 max-w-[1500px] bg-white">
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
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-md shadow-md hover:bg-primary hover:text-white duration-200 ease-in-out">
                <a href="#">Log In</a>
              </button>
            </div>
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-md shadow-md hover:bg-primary-hover duration-200 ease-in-out">
                <a href="#">Sing Up</a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero ✅*/}
      <div className="py-8 flex items-center">
        {/* left */}
        <div className="max-w-[548px]">
          <div className="flex flex-row gap-2 rounded-full w-fit px-8 py-3 shadow-md">
            <h1 className="text-secondary">Explore the world!</h1>
            <img src="/image/bag.svg" alt="bag" />
          </div>
          <div className="py-8">
            <h1 className="text-[62px] leading-tight">
              Travel <span className="text-secondary">top destination</span>{" "}
              <br /> of the world
            </h1>
          </div>
          <div className="pb-8">
            <p className="text-gray-400 text-md">
              We always make our customer happy by providing <br /> as many
              choices as possible
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-md shadow-md hover:bg-primary-hover duration-200 ease-in-out">
                <a href="#">Get Started</a>
              </button>
            </div>
            <div>
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-md shadow-md">
                <div className="flex flex-row gap-2">
                  <img src="/image/play.svg" alt="play" />
                  <a href="#">Log In</a>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <img src="/image/hero.svg" alt="hero" className="h-[632px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
