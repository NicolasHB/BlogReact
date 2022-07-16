import React from "react";
import Footers from "../Footers";
import Navigation from "../Navigation/Navigation";


export default function Layout({ children }) {
  return (
    <div className="">
      <Navigation />
      <main className="container py-16 ">
        
        {children}
      </main>
      <Footers />
    </div>
  );
}
