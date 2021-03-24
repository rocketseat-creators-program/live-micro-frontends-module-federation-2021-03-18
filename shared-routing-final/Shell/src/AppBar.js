import React from "react";
import { useServiceContext } from "./Service";

export function AppBar(props) {
  const serviceContext = useServiceContext();
  return (
    <nav className="bg-black p-6  fixed w-full z-10 top-0">
      <div className=" text-white mr-6">{serviceContext.title}</div>
    </nav>
  );
}
