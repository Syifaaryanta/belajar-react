import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* LATIHAN 1 - NAVBAR */}
      <div className="border-b-2 border-gray-300 pb-8">
        <h2 className="text-sm font-bold p-4 text-gray-600">LATIHAN 1</h2>
        <nav className="bg-gray-200 p-4 mx-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Kiri - Logo */}
            <div className="font-bold text-lg mb-4 md:mb-0">MyLogo</div>

            {/* Kanan - Menu */}
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
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
      <div className="border-b-2 border-gray-300 pb-8 mt-8">
        <h2 className="text-sm font-bold p-4 text-gray-600">LATIHAN 2</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-200"></div>
          ))}
        </div>
      </div>

      {/* LATIHAN 3 - PRICING TABLE */}
      <div className="border-b-2 border-gray-300 pb-8 mt-8">
        <h2 className="text-sm font-bold p-4 text-gray-600">LATIHAN 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1fr] gap-4 px-4">
          <div className="bg-gray-200 p-8 text-center rounded">
            <div className="font-semibold text-lg mb-2">Basic</div>
            <div className="text-sm">Rp 50.000</div>
          </div>
          <div className="bg-blue-200 p-8 text-center rounded">
            <div className="font-semibold text-lg mb-2">Pro</div>
            <div className="text-sm">Rp 100.000</div>
          </div>
          <div className="bg-gray-200 p-8 text-center rounded">
            <div className="font-semibold text-lg mb-2">Premium</div>
            <div className="text-sm">Rp 200.000</div>
          </div>
        </div>
      </div>

      {/* LATIHAN 4 - DASHBOARD LAYOUT */}
      <div className="border-b-2 border-gray-300 pb-8 mt-8">
        <h2 className="text-sm font-bold p-4 text-gray-600">LATIHAN 4</h2>
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-[400px]">
            {/* Header */}
            <header className="bg-gray-300 p-4 md:col-span-12 border border-gray-400">
              Header
            </header>
            
            {/* Sidebar */}
            <aside className="bg-gray-200 p-4 md:col-span-3 border border-gray-400 border-t-0 md:border-t md:border-r-0">
              Sidebar
            </aside>
            
            {/* Content */}
            <main className="bg-white p-4 md:col-span-9 border border-gray-400 border-t-0 md:border-t">
              Content
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-300 p-4 md:col-span-12 border border-gray-400 border-t-0">
              Footer
            </footer>
          </div>
        </div>
      </div>

      {/* LATIHAN 5 - CARD PRODUCT */}
      <div className="pb-8 mt-8">
        <h2 className="text-sm font-bold p-4 text-gray-600">LATIHAN 5</h2>
        <div className="px-4">
          <div className="flex flex-col md:flex-row border border-gray-400 max-w-2xl">
            {/* Gambar */}
            <div className="bg-gray-200 w-full md:w-32 h-32 md:h-auto flex items-center justify-center flex-shrink-0">
              <span className="text-gray-500 text-xs">80 × 80</span>
            </div>
            
            {/* Teks */}
            <div className="p-4 flex-1">
              <h3 className="font-bold text-base mb-1">Nama Produk</h3>
              <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;