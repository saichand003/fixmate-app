// // frontend/pages/search.tsx

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { mockMechanics } from "../data/mockMechanics";

// // Dynamically import Map to avoid SSR issues
// const Map = dynamic(() => import("../components/Map"), { ssr: false });

// export default function SearchResults() {
//   const router = useRouter();
//   const { zip } = router.query;
//   const [mechanics, setMechanics] = useState([]);

//   useEffect(() => {
//     if (zip && typeof zip === "string") {
//       const filtered = mockMechanics.filter((m) => m.zip === zip);
//       setMechanics(filtered);
//     }
//   }, [zip]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Mechanics near {zip}</h1>
//       <Map mechanics={mechanics} />
//     </div>
//   );
// }

// frontend/pages/search.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export type Mechanic = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

export default function Search() {
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);

  useEffect(() => {
    const zip = router.query.zipcode as string;
    if (zip) {
      setZipcode(zip);
      fetch(`/api/mechanics?zip=${zip}`)
        .then((res) => res.json())
        .then((data) => setMechanics(data));
    }
  }, [router.query.zipcode]);

  const handleSearch = () => {
    if (zipcode.trim()) {
      router.push({ pathname: "/search", query: { zipcode } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Find Mechanics Near You</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter ZIP code"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-4 py-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {mechanics.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <Map mechanics={mechanics} />
        </div>
      )}
    </div>
  );
}
