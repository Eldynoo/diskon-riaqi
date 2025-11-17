import React from "react";

export default function DiskonUI() {
  return (
    <div className="flex justify-center gap-6 bg-gray-100 min-h-screen p-10">

      
      <div className="bg-white p-6 rounded-lg h-100 shadow-md w-72 text-center">
        <h1 className="text-lg text-black font-bold mb-4">Aplikasi Perhitungan Diskon</h1>

        <input
          type="text"
          placeholder="Masukan nama barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan kategori barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan harga barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Masukan diskon barang"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-3"
        />

        <button className="w-full bg-blue-700 text-white py-2 rounded mb-2">
          Hitung
        </button>
        <button className="w-full bg-red-700 text-white py-2 rounded">
          Bersih
        </button>
      </div>

   
      <div className="bg-white p-6 rounded-lg h-100 shadow-md w-72 text-center">
        <h1 className="text-lg text-black font-bold mb-4">Aplikasi Perhitungan Diskon</h1>

        <input
          type="text"
          value="Susu "
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="Minuman"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="6000"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-2"
          readOnly
        />
        <input
          type="text"
          value="10"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-3"
          readOnly
        />

        <button className="w-full bg-blue-700 text-white py-2 rounded mb-2">
          Hitung
        </button>
        <button className="w-full bg-red-700 text-white py-2 rounded">
          Bersih
        </button>
      </div>


    </div>
  );
}