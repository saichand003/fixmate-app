import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    if (typeof router.query.zipcode === "string") {
      setZipcode(router.query.zipcode);
    }
  }, [router.query.zipcode]);

  const handleSearch = () => {
    router.push({ pathname: router.pathname, query: { zipcode } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Search Technicians</h1>
        <input
          type="text"
          placeholder="Enter zipcode"
          className="border p-2 rounded w-full mb-4"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}
