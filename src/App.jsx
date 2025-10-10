import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">LATIHAN 1</h2>
          <nav className="bg-slate-800 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              {/* Kiri - Logo */}
              <div className="font-bold text-2xl text-white mb-4 md:mb-0">Logo</div>

              {/* Kanan - Menu */}
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center">
          <div className="bg-gray-200 p-6 rounded">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen">
          <header className="bg-gray-300 p-4">Header</header>
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-white p-4 border">Content</main>
          <footer className="bg-gray-300 p-4">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;