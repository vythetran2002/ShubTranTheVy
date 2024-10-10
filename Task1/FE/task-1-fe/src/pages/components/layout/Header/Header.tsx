import React from "react";
import Image from "next/image";
import images from "../../../../../assets";

export const Header = () => {
  return (
    <header className="bg-gray-200 shadow-2xl w-full">
      <div className="max-w-[2105px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src={images.logo}
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-auto cursor-pointer"
            />
          </div>
          {/* You can add more header content here if needed in the future */}
        </div>
      </div>
    </header>
  );
};
