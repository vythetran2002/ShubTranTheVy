import React from "react";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <Toaster />
      <Header />

      <main className="flex-grow bg-white">
        <div className="max-w-[2105px] mx-auto p-6">{children}</div>
      </main>

      <footer className="bg-gray-200 p-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <p className="text-center"></p>
        </div>
      </footer>
    </div>
  );
};
