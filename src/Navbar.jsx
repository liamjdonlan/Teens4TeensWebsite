import logo from "./assets/logo.avif";

function Navbar() {
  return (
    <nav className="px-4 bg-white py-3 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-15 w-15" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl font-bold">TEENS 4 TEENS</h1>
            <span className="text-sm italic text-gray/80">
              Period Products For All.
            </span>
          </div>
        </div>
        <div className="space-x-4">
          <button className="hover:underline">Log In</button>
          <button className="bg-rose-300 text-white px-4 py-2 rounded-full hover:bg-rose-400 transition">
            Donate Now
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
            Take Action
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition">
            <span className="flex items-center">
              <p className="px-2">Menu</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
