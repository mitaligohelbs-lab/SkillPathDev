import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="min-h-screen flex flex-col grow overflow-y-auto">
    {children}
  </div>
);
export default layout;
