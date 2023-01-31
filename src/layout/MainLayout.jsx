import React from "react";
import { Outlet } from "react-router-dom";

const styleMain = {
  display: "grid",
  placeItems: "center",
  minHeight: "100vh",
};

export const MainLayout = () => {
  return (
    <div className={"container"} style={styleMain}>
      <main style={{ marginBottom: "50px" }}>
        <Outlet />
      </main>
      <footer className={"text-center fixed-bottom"} style={{ color: "white" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
