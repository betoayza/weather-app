import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className={"h-auto"}>
      <main>
        <Outlet />
      </main>
      <footer className={"text-center fixed-bottom"} style={{ color: "white" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
