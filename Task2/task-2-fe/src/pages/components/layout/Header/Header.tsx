import React from "react";

export const Header = () => {
  return (
    <header className="bg-white py-3 shadow-2xl w-full z-20">
      <div className="max-w-[2105px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-black font-bold text-2xl">
              Nhập giao dịch
            </span>
          </div>
          {/* You can add more header content here if needed in the future */}
        </div>
      </div>
    </header>
  );
};
