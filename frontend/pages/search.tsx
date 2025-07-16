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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Map from "../components/Map";


const Map = dynamic(() => import("../components/Map"), { ssr: false });

type Mechanic = {
  id: number;
  name: string;
  zip: string;
  latitude: number;
  longitude: number;
};

export default function SearchResults() {
  const router = useRouter();
  const { zip } = router.query;
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);

  useEffect(() => {
    if (zip) {
      fetch(`/api/mechanics?zip=${zip}`)
        .then((res) => res.json())
        .then((data) => setMechanics(data))
    }
  }, [zip]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mechanics near ZIP: {zip}</h1>
      <Map mechanics={mechanics} />
    </div>
  );
}
