"use client"; // Ensure this is the first line

import { useRouter } from "next/navigation";

export default function Button({number}:any) {
  const router = useRouter();
    const Number=parseInt(number);
   function handle1(){
   
    router.push(`/feed/${Number+1}`);
  };

  function handle2(){
    

    router.push(`/feed/${Number-1}`);
  };

  return (
    <>
      <div className="flex justify-between mt-10">
        {number > 1 && (
        <button
        onClick={handle2}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>)}

        {/* Button with onClick handler */}
        <button
          onClick={handle1} // onClick event
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
