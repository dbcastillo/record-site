import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import taylor from "/Taylor.png";
import "./App.css";
import records from "./data/records.json";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Record Collection</h1>
      <ul className="space-y-4">
        {records.map((record) => (
          <li
            key={record.id}
            className="bg-white-600 p-4 rounded flex items-center gap-4"
          >
            <img
              src={taylor}
              alt={record.album}
              className="w-20 h-20 object-cover rounded shadow"
            />
            <div>
              <p className="font-semibold">{record.album}</p>
              <p className="text-sm text-gray-600">
                {record.artist} ({record.year})
              </p>
              <p className="text-blue-500">${record.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
