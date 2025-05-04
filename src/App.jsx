function App() {
  return (
    <div className="pt-24 px-32 m-auto max-w-[1500px]">
      {/* Navbar ✅*/}
      <nav className="flex items-center justify-between flex-row py-6 cursor-pointer fixed top-0 left-1/2 transform -translate-x-1/2 px-32 m-auto w-full z-10 max-w-[1500px] bg-white">
        <div>
          <img src="/image/logo.svg" alt="logo" className="h-11" />
        </div>
        <div>
          <ul className="flex flex-row gap-16 text-base font-figtre text-gray-400">
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
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-base shadow-md hover:bg-primary hover:text-white duration-200 ease-in-out">
                <a href="#">Log In</a>
              </button>
            </div>
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-base shadow-md hover:bg-primary-hover duration-200 ease-in-out">
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
            <p className="text-gray-400 text-base">
              We always make our customer happy by providing <br /> as many
              choices as possible
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-row gap-4">
            <div>
              <button className="bg-primary px-8 py-3 rounded-full text-white font-semibold text-base shadow-md hover:bg-primary-hover duration-200 ease-in-out">
                <a href="#">Get Started</a>
              </button>
            </div>
            <div>
              <button className="bg-white px-8 py-3 rounded-full text-black border border-gray-200 font-semibold text-base shadow-md">
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

      {/* Sponsor ✅*/}
      <div className="py-16 my-12">
        <div className="flex overflow-x-auto gap-28 justify-between whitespace-nowrap [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <img src="/image/tripadvisor.svg" alt="tripadvisor" />
          <img src="/image/expedia.svg" alt="expedia" />
          <img src="/image/booking.svg" alt="booking" />
          <img src="/image/airbnb.svg" alt="airbnb" />
          <img src="/image/arbitz.svg" alt="arbitz" />
          <img src="/image/tripadvisor.svg" alt="tripadvisor" />
          <img src="/image/expedia.svg" alt="expedia" />
          <img src="/image/booking.svg" alt="booking" />
          <img src="/image/airbnb.svg" alt="airbnb" />
          <img src="/image/arbitz.svg" alt="arbitz" />
        </div>
      </div>

      {/* Prouduct Crad */}
      <div className="w-full justify-between flex items-center mb-12">
        <div className="w-[20%]">
          <h1 className="text-secondary text-[23px] [letter-spacing:5px]">
            SERVICES
          </h1>
          <h1 className="text-[44px]">Our top value categories for you</h1>
        </div>

        {/* Card 1*/}
        <div className="flex gap-3">
          <div className="py-16 border border-gray-300 shadow-md h-[443px] rounded-4xl w-[320px] flex flex-col items-center ">
            <div className="py-8">
              <img src="/image/icons/card-destination.svg" alt="destination" />
            </div>
            <div className="px-12 text-center">
              <h1 className="mb-4 text-[28px]">Best Tour Guide</h1>
              <p className="text-lg text-gray-400">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="py-16 border border-gray-300 shadow-md h-[443px] rounded-4xl w-[320px] flex flex-col items-center ">
            <div className="py-8">
              <img src="/image/icons/card-booking.svg" alt="booking" />
            </div>
            <div className="px-12 text-center">
              <h1 className="mb-4 text-[28px]">Easy Booking</h1>
              <p className="text-lg text-gray-400">
                Square, was moving across the sand in their direction.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="py-16 border border-gray-300 shadow-md h-[443px] rounded-4xl w-[320px] flex flex-col items-center ">
            <div className="py-8">
              <img src="/image/icons/card-cloudy.svg" alt="cloudy" />
            </div>
            <div className="px-12 text-center">
              <h1 className="mb-4 text-[28px]">Weather Forecast</h1>
              <p className="text-lg text-gray-400">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
