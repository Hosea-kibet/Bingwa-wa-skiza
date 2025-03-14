import { getTodos } from '@/lib/db/queries';
import Image from 'next/image';

// This will be replaced by 'use cache' soon
export const dynamic = 'force-static';
export default async function () {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-teal-600">
          <span className="text-teal-600">Bingwa</span>
          <span className="text-red-500"> wa Skiza</span>
        </h1>
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
