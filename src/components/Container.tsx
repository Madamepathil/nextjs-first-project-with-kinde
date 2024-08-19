import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px] mx-auto min-h-screen flex flex-col bg-white border-l border-r">
      {children}
    </div>
  );
};

export default Container;
