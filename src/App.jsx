import "./App.css";

function App() {
  return (
    <>
      <div className="space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <div>
          <h2 className="text-xl font-bold p-4">LATIHAN 1</h2>
          <nav className="bg-gray-100 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Kiri - Logo */}
              <div className="font-bold text-lg mb-4 md:mb-0">MyLogo</div>

              {/* Kanan - Menu */}
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* LATIHAN 2 - GRID GALERI */}
        <div>
          <h2 className="text-xl font-bold p-4">LATIHAN 2</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
            <img
              src="https://placehold.co/200x200"
              alt="Gambar Galeri"
              className="w-full bg-gray-200"
            />
          </div>
        </div>
        {/* LATIHAN 3 - PRICING TABLE */}
        <div>
          <h2 className="text-xl font-bold p-4">LATIHAN 3</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-gray-100 p-6 text-center">
              <div className="font-semibold">Basic</div>
              <div className="mt-2">Rp 50.000</div>
            </div>
            <div className="bg-blue-100 p-6 text-center">
              <div className="font-semibold">Pro</div>
              <div className="mt-2">Rp 100.000</div>
            </div>
            <div className="bg-gray-100 p-6 text-center">
              <div className="font-semibold">Premium</div>
              <div className="mt-2">Rp 200.000</div>
            </div>
          </div>
        </div>

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <div>
          <h2 className="text-xl font-bold p-4">LATIHAN 4</h2>
          <div className="grid min-h-[400px] grid-cols-[200px,1fr] grid-rows-[auto,1fr,auto]">
            <header className="bg-gray-200 p-4 col-span-2">Header</header>
            <aside className="bg-gray-100 p-4">Sidebar</aside>
            <main className="bg-white p-4">Content</main>
            <footer className="bg-gray-200 p-4 col-span-2">Footer</footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;