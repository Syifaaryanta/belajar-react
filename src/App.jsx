import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <div>
          <div className="text-xs text-gray-600 mb-3">LATIHAN 1</div>
          <nav className="p-4 bg-gray-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              {/* Kiri - Logo */}
              <div className="font-bold text-lg mb-4 md:mb-0">MyLogo</div>
              {/* Kanan - Menu */}
              <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
        </div>
        <hr />


        {/* LATIHAN 3 - PRICING TABLE */}
        <div>
          <div className="text-xs text-gray-600 mb-3">LATIHAN 3</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-200 p-6">
              <div className="font-semibold mb-2">Basic</div>
              <div className="text-sm">Rp 50.000</div>
            </div>
            <div className="bg-blue-200 p-6">
              <div className="font-semibold mb-2">Pro</div>
              <div className="text-sm">Rp 100.000</div>
            </div>
            <div className="bg-gray-200 p-6">
              <div className="font-semibold mb-2">Premium</div>
              <div className="text-sm">Rp 200.000</div>
            </div>
          </div>
        </div>
        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <div>
          <div className="text-xs text-gray-600 mb-3">LATIHAN 4</div>
          <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-400 min-h-[500px]">
            <header className="bg-gray-300 p-4 md:col-span-12 border-b border-gray-400">
              Header
            </header>
            <aside className="bg-gray-200 p-4 md:col-span-3 border-t md:border-t-0 md:border-r border-gray-400">
              Sidebar
            </aside>
            <main className="bg-white p-4 border-t border-gray-400 md:border-t-0 md:col-span-9">
              Content
            </main>
            <footer className="bg-gray-300 p-4 md:col-span-12 border-t border-gray-400">
              Footer
            </footer>
          </div>
        </div>
        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        <div className="p-4 border border-gray-400 rounded flex flex-col md:flex-row gap-4 items-center md:items-center">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="w-20 h-20 object-cover flex-shrink-0"
          />
          <div className="text-center md:text-left md:flex md:flex-col md:justify-center">
            <h3 className="font-bold text-base mb-1">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;