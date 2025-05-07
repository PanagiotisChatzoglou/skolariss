import Image from "next/image";
import React from "react";

const Element = () => {
  return (
    <div className="bg-darkBlue min-h-screen px-0 py-12">
      {/* FIRST SECTION */}
      <div className="w-full bg-fuchsia-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        {/* LEFT SIDE  */}
        <div className="md:w-1/2 text-center md:text-left pt-10 pb-10">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Next Level Learning
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Learn from the best instructors
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* RIGHT SIDE  */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/images/two.png"
            alt="Learning"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        {/* LEFT SIDE  */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/assets/images/one.png"
            alt="Learning"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* RIGHT SIDE  */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-green-600 font-semibold text-lg mb-2">
            Next Level Learning
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Learn from the best instructors
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element;
