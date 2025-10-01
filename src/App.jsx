import { useState } from "react";
import records from "./data/records.json";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Record Collection</h1>
      <ul className="flex flex-wrap gap-4">
        {records.map((record) => (
          <li key={record.id}>
            <img
              src={record.cover}
              alt={record.album}
              className="w-40 h-40 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedAlbum(record)}
            />
          </li>
        ))}
      </ul>

      {selectedAlbum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-white-500 hover:text-red-800"
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
              <br></br>Album: {selectedAlbum.album}
              <br></br>Year: {selectedAlbum.year}
            </p>
            <p className="text-blue-500">${selectedAlbum.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
