import { useState } from "react";
import records from "./data/records.json";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="min-w-screen min-h-screen bg-gray-700 p-4">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-fit">
          <header className="rounded-3xl inline-block bg-white text-black mb-20">
            <div className="bg-gray-700 flex items-center gap-3">
              <img
                src="/Record.png"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
              <span className="text-white font-bold font-serif text-3xl sm:text-md md:text-md">
                Kool Kat Records
              </span>
            </div>
          </header>

          <div className="flex flex-row mb-10 sm:mb-20 max-w-full">
            <div className="pt-3 sm:pt-5 pb-3 sm:pb-5 rounded-l-3xl px-4 sm:px-6 md:px-8 bg-white font-bold text-2xl sm:text-3xl md:text-4xl text-black">
              <span className="font-serif block text-gray-700">Welcome To</span>
              <span className="font-serif block text-gray-700">
                Kool Kat Records
              </span>
              <span className="italic text-orange-700 tracking-widest uppercase font-mono pt-3 sm:pt-5 text-xs sm:text-sm block">
                The best place to find trendy records
              </span>
            </div>
            <div className="rounded-r-3xl pl-3 sm:pl-5 pr-4 sm:pr-6 bg-white flex items-center">
              <img
                src="/RecordPlayer.png"
                alt="Logo"
                className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain"
              />
            </div>
          </div>
        </div>

        <p className="font-bold pb-5">Click for Details</p>
        <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-5">
          {records.map((record) => (
            <li key={record.id} className="flex justify-center">
              <img
                src={record.cover}
                alt={record.album}
                className="w-full max-w-[150px] aspect-square object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedAlbum(record)}
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedAlbum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-800"
              onClick={() => setSelectedAlbum(null)}
            >
              X
            </button>
            <img
              src={selectedAlbum.cover}
              alt={selectedAlbum.album}
              className="w-full h-80 object-cover rounded mb-4"
            />
            <p className="text-gray-600 mb-2">
              Artist: {selectedAlbum.artist}
              <br />
              Album: {selectedAlbum.album}
              <br />
              Year: {selectedAlbum.year}
            </p>
            <p className="text-blue-500">${selectedAlbum.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
